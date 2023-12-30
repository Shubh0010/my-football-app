import PlayerCard from "./PlayerCard"

const PlayerCategory = ({ playerCategoryData, showItems, setShowItems }) => {

  const playerCategory = playerCategoryData?.type?.fullWidth?.component?.contentType?.entityNavigation;

  const handleClick = () => {
    setShowItems();
  };

  return (
    <div>
      <div className="bg-gray-50 mx-auto my-4 shadow-lg p-4 w-6/12 cursor-pointer">
        {/** Header */}
        <div className="flex justify-between m-4 cursor-pointer" onClick={handleClick}>
          <span className="font-bold">{playerCategory?.title}({
            playerCategory?.links?.length || 0
          })</span>
          <span className="w-4 mt-2">
            <img src="https://uxwing.com/wp-content/themes/uxwing/download/arrow-direction/chevron-down-icon.svg" />
          </span>
        </div>
        {/** Accordian Body */}
        <div className="pt-1">
          {
            showItems && playerCategory?.links.map((player) => {
              return <PlayerCard key={player.title} player={player} />
            })
          }
        </div>
      </div>
    </div>
  )
}

export default PlayerCategory