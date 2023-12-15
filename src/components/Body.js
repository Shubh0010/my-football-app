import clubData from '../utils/clubData.json';
import ClubCard from './ClubCard';
import { useState } from 'react';

const Body = () => {

  const [clubs, setClubList] = useState(clubData);

  return (
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
            <ClubCard key={club.id} club={club} />
          ))
        }

      </div>
    </div>
  );
};

export default Body;