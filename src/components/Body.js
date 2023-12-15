import clubData from '../utils/clubData.json';
import ClubCard from './ClubCard';

const Body = () => {

  return (
    <div className='body'>
      <div></div>
      <div className='search'> Search </div>
      <div className='club-container'>
        {
          clubData.map(club => (
            <ClubCard key={club.id} club={club} />
          ))
        }

      </div>
    </div>
  );
};

export default Body;