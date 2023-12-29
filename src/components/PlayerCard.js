const PlayerCard = ({player}) => {
  return (

    <div className='m-4 p-4 pb-0 rounded-lg w-60'>
      <img
        className='w-52 rounded-3xl'
        alt='player-image'
        src={player.logo.path}
      />
      <h3 className='m-6 font-bold'>{player.title}</h3>
    </div>
  );
}

export default PlayerCard;