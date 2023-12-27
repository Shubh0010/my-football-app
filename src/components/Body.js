import clubData from '../utils/clubData.json';
import ClubCard from './ClubCard';
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
    <div className='body'>
      <div className='filter'>
        <button className='filter-btn'  onClick={
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
      <div className='search'>
        <input 
          type='text' 
          className='search-box' 
          value={searchText}
          onChange={e => {
            setsearchText(e.target.value)
          }}
        />
        <button onClick={()=> {
          let filteredResultrants = clubs.filter(club => club.teamName.toLowerCase().includes(searchText.toLowerCase()))
          setFilteredClubs(filteredResultrants);
        }}>Search</button>
      </div>
      <div className='club-container'>
        {
          filteredClubs.map(club => (
            <Link className="player-links" key={club.uiKey} to={"/club-squad/" + club.teamPath.split('/')[club.teamPath.split('/').length - 1]}>
              <ClubCard club={club} />
            </Link>
          ))
        }

      </div>
    </div>
  );
};

export default Body;