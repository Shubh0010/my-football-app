const ClubCard = ({ club }) => {
  return (

    <div className='club-card'>
      <img
        className='club-logo'
        alt='club-logo'
        src={club.imageObject.path}
      />
      <h3 className='club-name'>{club.teamName}</h3>
      <h4 className='club-rank'>Rank: {club.position}</h4>
      <h4 className='club-points'>Current Points: {club.points}</h4>
      <h4 className='club-matches-played'>Matches Played: {club.playedMatchesCount}</h4>
      <h4 className='club-matches-won'>Matches Won: {club.wonMatchesCount}</h4>
    </div>
  );
}

export default ClubCard;