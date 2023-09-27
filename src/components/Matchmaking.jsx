import axios from "axios";
import { useState, useEffect } from "react";

const Matchmaking = () => {
  const [champ, setChamp] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await axios.get(
        "http://ddragon.leagueoflegends.com/cdn/13.19.1/data/en_US/champion.json"
      );
      setChamp(Object.values(result.data.data));
    })();
  }, [setChamp]);

  return (
    <div className="w-3/4">
      <div className="grid grid-cols-10 gap-4">
        {champ.map((c) => (
          <img
            src={`http://ddragon.leagueoflegends.com/cdn/13.19.1/img/champion/${c.id}.png`}
          />
        ))}
      </div>
    </div>
  );
};

export default Matchmaking;
