import axios from "axios";
import { useState, useEffect } from "react";
import { Input } from "@material-tailwind/react";

const players = [
  { player: "sachin", champ: "" },
  { player: "parth", champ: "" },
  { player: "jonah", champ: "" },
];
const Matchmaking = () => {
  const [allChamps, setAllChamps] = useState([]);
  const [activeChamps, setActiveChamps] = useState([]);
  const [blueTeam, setBlueTeam] = useState(players);

  useEffect(() => {
    (async () => {
      const result = await axios.get(
        "http://ddragon.leagueoflegends.com/cdn/13.19.1/data/en_US/champion.json"
      );
      const c = Object.values(result.data.data);
      setAllChamps(c);
      setActiveChamps(c);
    })();
  }, [setAllChamps, setActiveChamps]);
  console.log(activeChamps);

  const search = (e) => {
    console.log(e.target.value);
    if (!e.target.value) {
      setActiveChamps(allChamps);
    } else {
      setActiveChamps(
        allChamps.filter((champ) =>
          champ.name.toLowerCase().startsWith(e.target.value.toLowerCase())
        )
      );
    }
  };

  return (
    <div className=" w-50v flex flex-col items-center">
      <div className="w-3/4">
        <Input label="Champion" onChange={search} />
      </div>
      <div className="flex flex-wrap w-50v gap-4 overflow-auto max-h-70v p-4">
        {activeChamps.map((c) => (
          <img
            src={`http://ddragon.leagueoflegends.com/cdn/13.19.1/img/champion/${c.id}.png`}
            className="w-20 h-20"
          />
        ))}
      </div>
    </div>
  );
};

export default Matchmaking;
