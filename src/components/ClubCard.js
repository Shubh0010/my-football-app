const ClubCard = ({ club }) => {
  return (

    <div className='club-card'>
      <img
        className='club-logo'
        alt='club-logo'
        src={club.sportsTeamJSONLD.logo}
      />
      <h3 className='club-name'>{club.name}</h3>
      <h4 className='club-league'>{club.sportsTeamJSONLD?.memberOf?.name}</h4>
      <h4 className='club-stadium'>{club.sportsTeamJSONLD?.location?.name}</h4>
      <h4 className='club-coach'>{club.sportsTeamJSONLD?.coach?.name}</h4>
    </div>
  );
}

export default ClubCard;