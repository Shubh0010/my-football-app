import { useState, useEffect } from "react";
import { GET_SQUAD } from "../utils/constant";

const useSquads = (clubRef) => {

  const [squadData, setSquadData] = useState({});

  useEffect(() => {
    fetchSquad();
  }, []);

  const fetchSquad = async () => {
    const data = await fetch(GET_SQUAD.replace('{clubRef}', clubRef));
    const json = await data.json();
    setSquadData(json?.pageProps);
  }

  return squadData;
}

export default useSquads;