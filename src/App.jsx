import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Matchmaking from "./components/matchmaking";
import Header from "./components/Header";
import Team from "./components/Team";
function App() {
  return (
    <>
      <Header />
      <div className="w-full flex justify-between p-8">
        <Team />
        <Matchmaking />
        <Team />
      </div>
    </>
  );
}

export default App;
