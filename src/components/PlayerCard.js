const PlayerCard = ({player}) => {
  return (

    <div className='m-4 p-4 rounded-3xl flex bg-gray-200 w-11/12'>
      <img
        className='w-16 rounded-full'
        alt='player-image'
        src={player.logo.path}
      />
      <h3 className='m-6 font-bold'>{player.title}</h3>
    </div>
  );
}

export default PlayerCard;