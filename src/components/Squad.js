
import Shimmer from "./Shimmer";
import PlayerCard from "./PlayerCard";
import { useParams } from "react-router-dom";
import useSquads from "../utils/useSquads";

const Squad = () => {

  const { clubRef } = useParams();

  const squadData = useSquads(clubRef);

  return !squadData?.containers ? (
    <Shimmer />
  ) : (
    <div className="bg-green-100">
      <div className="text-slate-700 text-6xl font-extrabold p-8 ml-80">
        {squadData?.containers[1]?.type?.fullWidth?.component?.contentType?.entityTitle?.title}
      </div>
      <div className="flex flex-wrap p-4">
        {[
          ...squadData.containers[3]?.type?.fullWidth?.component?.contentType?.entityNavigation?.links || [],
          ...squadData.containers[4]?.type?.fullWidth?.component?.contentType?.entityNavigation?.links || [],
          ...squadData.containers[6]?.type?.fullWidth?.component?.contentType?.entityNavigation?.links || [],
          ...squadData.containers[7]?.type?.fullWidth?.component?.contentType?.entityNavigation?.links || [],
        ].map(player => (
          <PlayerCard key={player.logo.alt} player={player} />
        ))}
      </div>
    </div>
  )
}

export default Squad;