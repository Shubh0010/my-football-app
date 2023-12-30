
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useSquads from "../utils/useSquads";
import PlayerCategory from "./PlayerCategory";
import { useState } from "react";

const Squad = () => {

  const { clubRef } = useParams();

  const squadData = useSquads(clubRef);

  const [showIndex, setShowIndex] = useState();

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
      <div className="text-slate-700 text-6xl font-extrabold p-8 flex items-center justify-center">
        {squadData?.containers[1]?.type?.fullWidth?.component?.contentType?.entityTitle?.title}
      </div>
      <div className="p-4">
        {playerCategories.map((playerCategory, index) => (
          <PlayerCategory
            key={playerCategory.uiKey}
            playerCategoryData={playerCategory}
            showItems={index == showIndex ? true : false}
            setShowItems={ () => {
              setShowIndex(index)
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default Squad;