import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Matchmaking from "./components/matchmaking";
import Header from "./components/Header";
function App() {
  return (
    <>
      <Header />
      <div className="w-full flex justify-center p-2">
        <Matchmaking />
      </div>
    </>
  );
}

export default App;
