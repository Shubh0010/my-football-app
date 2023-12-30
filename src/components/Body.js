import clubData from '../utils/clubData.json';
import ClubCard, { favoriteClub } from './ClubCard';
import { useState, useEffect } from 'react';
import Shimmer from './Shimmer';
import { GET_CLUB_URL } from '../utils/constant';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';

const Body = () => {

  const [top10ClubsButton, settop10ClubsButton] = useState('Top 10 Premier League Clubs');

  const [clubs, setClubList] = useState([]);
  const [filteredClubs, setFilteredClubs] = useState([]);

  const [searchText, setsearchText] = useState('');

  const FavoriteClubCard = favoriteClub(ClubCard);

  useEffect(() => {
    fetchClub();
  }, []);

  const fetchClub = async () => {

    const data = await fetch(GET_CLUB_URL);
    const json = await data.json();

    setClubList(json?.pageProps?.containers[4]?.type?.fullWidth?.component?.contentType?.standings?.rows || clubData);
    setFilteredClubs(json?.pageProps?.containers[4]?.type?.fullWidth?.component?.contentType?.standings?.rows || clubData);
  }

  const onlineStatus = useOnlineStatus();

  if (!onlineStatus) {
    return <h1>Looks like you are offline!</h1>
  }

  return clubs.length === 0 ? (
    <Shimmer />
  ) : (
    <div className='bg-green-100'>
      <div className='flex justify-between p-2'>
        <div className='filter'>
          <button className='bg-green-400 p-2 rounded-2xl text-gray-600 mt-5' onClick={
            () => {
              if (top10ClubsButton == 'All PL Clubs') {
                setFilteredClubs(clubs);
                settop10ClubsButton('Top 10 Premier League Clubs');
              } else {
                setFilteredClubs(clubs.filter(club => club.position <= '10'));
                settop10ClubsButton('All PL Clubs');
              }
            }
          }>  {top10ClubsButton}  </button>
        </div>
        <div className='flex p-1'>
          <input
            type='text'
            className='m-4 h-6 bg-gray-50 outline-green-600'
            value={searchText}
            onChange={e => {
              setsearchText(e.target.value)
            }}
          />
          <button className='text-gray-600 px-2 py-1 rounded-xl bg-green-400 mt-3 h-8' onClick={() => {
            let filteredResultrants = clubs.filter(club => club.teamName.toLowerCase().includes(searchText.toLowerCase()))
            setFilteredClubs(filteredResultrants);
          }}><h6>Search</h6></button>
        </div>
      </div>
      <div className='flex flex-wrap p-4'>
        {
          filteredClubs.map(club => (
            <Link className="player-links" key={club.uiKey} to={"/club-squad/" + club.teamPath.split('/')[club.teamPath.split('/').length - 1]}>
              {
                club.teamPath.split('/')[club.teamPath.split('/').length - 1] == 'manchester-united-21' ? (
                <FavoriteClubCard club={club} /> 
                ) : (
                <ClubCard club={club} />
                )
              }
            </Link>
          ))
        }

      </div>
    </div>
  );
};

export default Body;