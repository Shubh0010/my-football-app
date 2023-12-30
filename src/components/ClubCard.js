const ClubCard = ({ club }) => {
  return (

    <div className='m-6 p-6 pb-0 bg-green-200 rounded-lg w-56 h-96 hover:bg-green-300'>
      <img
        className='size-40'
        alt='club-logo'
        src={club.imageObject.path}
      />
      <div className="place-items-center m-4 mb-2px">
        <h3 className="size-auto font-extrabold text-xl my-5">{club.teamName}</h3>
        <h4 className="font-light text-sm">Rank: {club.position}</h4>
        <h4 className="font-light text-sm">Current Points: {club.points}</h4>
        <h4 className="font-light text-sm">Matches Played: {club.playedMatchesCount}</h4>
        <h4 className="font-light text-sm">Matches Won: {club.wonMatchesCount}</h4>
      </div>
    </div>
  );
}

// Higher order component

// input - club card =>> club card Favorite

export const favoriteClub = (ClubCard) => {

  return (props) => {
    return (
      <div>
        <label className="absolute bg-red-400 rounded-2xl p-2 text-white">Favorite</label>
        <ClubCard {...props} />
      </div>
    )
  }
}

export default ClubCard;