import axios from "axios";
import { useState, useEffect } from "react";
const Matchmaking = () => {
  const [champ, setChamp] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await axios.get(
        "http://ddragon.leagueoflegends.com/cdn/13.1.1/data/en_US/champion.json"
      );
      console.log(result);

      setChamp(Object.values(result.data.data));
    })();
  }, [setChamp]);
  console.log(champ);
  return (
    <div>
      {champ.map((c) => (
        <img
          src={`http://ddragon.leagueoflegends.com/cdn/13.19.1/img/champion/${c.id}.png`}
        />
      ))}
    </div>
  );
};

export default Matchmaking;
