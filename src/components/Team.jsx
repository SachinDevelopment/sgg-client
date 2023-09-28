const pl = ["Kayle", "Morgana", "Anivia"];
const Team = () => {
  return (
    <div>
      {pl.map((p) => (
        <>
          <img
            className="w-24 h-24 mb-4 border-2 border-solid rounded-full border-black"
            src={`http://ddragon.leagueoflegends.com/cdn/13.19.1/img/champion/${p}.png`}
          />
          <div> {p} </div>
        </>
      ))}
    </div>
  );
};

export default Team;
