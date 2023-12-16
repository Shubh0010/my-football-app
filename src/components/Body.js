import clubData from '../utils/clubData.json';
import ClubCard from './ClubCard';
import { useState, useEffect } from 'react';
import Shimmer from './Shimmer';
import { GET_CLUB_URL } from '../utils/constant';

const Body = () => {

  const [top10ClubsButton, settop10ClubsButton] = useState('Top 10 Premier League Clubs');

  const [clubs, setClubList] = useState([]);

  useEffect(() => {
    fetchClub(setClubList);
  }, []);

  return clubs.length === 0 ? (
    <Shimmer />
  ) : (
    <div className='body'>
      <div className='filter'>
        <button className='filter-btn'  onClick={
          () => filterClubs(fetchClub, settop10ClubsButton, setClubList, top10ClubsButton)
        }>  {top10ClubsButton}  </button>
      </div>
      <div className='search'> Search </div>
      <div className='club-container'>
        {
          clubs.map(club => (
            <ClubCard key={club.uiKey} club={club} />
          ))
        }

      </div>
    </div>
  );
};

const fetchClub = async (setClubList) => {

  const data = await fetch(GET_CLUB_URL);
  const json = await data.json();

  setClubList(json?.pageProps?.containers[4]?.type?.fullWidth?.component?.contentType?.standings?.rows || clubData);
}

const filterClubs = (fetchClub, settop10ClubsButton, setClubList, top10ClubsButton) => {
  if (top10ClubsButton == 'All PL Clubs') {
    fetchClub(setClubList);
    settop10ClubsButton('Top 10 Premier League Clubs');
  } else {
    setClubList(clubs.filter(club => club.position <= '10'));
    settop10ClubsButton('All PL Clubs');
  }
}

export default Body;