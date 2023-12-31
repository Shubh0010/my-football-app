
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useSquads from "../utils/useSquads";
import PlayerCategory from "./PlayerCategory";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addImage, clearImage } from "../utils/squadSlice";

const Squad = () => {

  const { clubRef } = useParams();

  const squadData = useSquads(clubRef);

  const [showIndex, setShowIndex] = useState({
    index: 0,
    listItems: false
  });

  const dispatch = useDispatch();

  useEffect(() => {

    dispatch(addImage(`https://images.onefootball.com/icons/teams/164/${clubRef.split('-')[clubRef.split('-').length-1]}.png` || ''));

    return () => {
      dispatch(clearImage());
    }
  }, []);

  const playerCategories = [
    squadData?.containers?.[3],
    squadData?.containers?.[4],
    squadData?.containers?.[6],
    squadData?.containers?.[7],
  ];

  return !squadData?.containers ? (
    <Shimmer />
  ) : (
    <div className="bg-green-100">
      <div 
        className="text-slate-700 text-6xl font-extrabold p-8 flex items-center justify-center"
      >
        {squadData?.containers[1]?.type?.fullWidth?.component?.contentType?.entityTitle?.title}
      </div>
      <div className="p-4">
        {playerCategories.map((playerCategory, index) => (
          <PlayerCategory
            key={playerCategory.uiKey}
            playerCategoryData={playerCategory}
            showItems={showIndex.index == index && showIndex.listItems ? true : false}
            setShowItems={() => {
              setShowIndex({
                index,
                listItems: !showIndex.listItems
              })
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default Squad;