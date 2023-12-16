import clubData from '../utils/clubData.json';
import ClubCard from './ClubCard';
import { useState, useEffect } from 'react';
import Shimmer from './Shimmer';

const Body = () => {

  const [clubs, setClubList] = useState([]);

  useEffect(()=> {
    fetchClub();
  }, []);

  const fetchClub = async () => {

    const data = await fetch(
      `https://onefootball.com/_next/data/54077c7fb835/en/competition/premier-league-9/table.json?competition-id=premier-league-9&entity-page=table`
    );

    const json = await data.json();

    setClubList(json?.pageProps?.containers[4]?.type?.fullWidth?.component?.contentType?.standings?.rows || clubData);
  }

  return clubs.length === 0 ? (
    <Shimmer/>
  ) : (
    <div className='body'>
      <div className='filter'>
        <button 
          className='filter-btn'
          onClick={()=> {
            setClubList(clubs.filter(club => club.sportsTeamJSONLD.memberOf.name == 'Premier League'));
          }}
        >
            Premier League
        </button>
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

export default Body;