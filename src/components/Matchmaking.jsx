import axios from "axios";
import { useState, useEffect } from "react";

const players = [
  { player: "sachin", champ: "" },
  { player: "parth", champ: "" },
  { player: "jonah", champ: "" },
];
const Matchmaking = () => {
  const [champ, setChamp] = useState([]);
  const [blueTeam, setBlueTeam] = useState(players);

  const [count, setCount] = useState(0);

  useEffect(() => {
    //Implementing the setInterval method
    const interval = setInterval(() => {
      if (count <= 30) {
        setCount(count + 1);
      } else {
        setCount(0);
      }
    }, 1000);

    //Clearing the interval
    return () => clearInterval(interval);
  }, [count]);

  useEffect(() => {
    (async () => {
      const result = await axios.get(
        "http://ddragon.leagueoflegends.com/cdn/13.19.1/data/en_US/champion.json"
      );
      setChamp(Object.values(result.data.data));
    })();
  }, [setChamp]);

  return (
    <div className="w-3/4 flex justify-center">
      <div className="grid grid-cols-10 gap-4 w-50v overflow-auto h-70v">
        {champ.map((c) => (
          <img
            src={`http://ddragon.leagueoflegends.com/cdn/13.19.1/img/champion/${c.id}.png`}
            // onClick={() => setBlueTeam((prev) => [...prev, c])}
          />
        ))}
      </div>
    </div>
  );
};

export default Matchmaking;
