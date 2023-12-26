const PlayerCard = ({player}) => {
  return (

    <div className='player-card'>
      <img
        className='player-Image'
        alt='player-image'
        src={player.logo.path}
      />
      <h3 className='player-name'>{player.title}</h3>
    </div>
  );
}

export default PlayerCard;