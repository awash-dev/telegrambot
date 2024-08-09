import React from "react";
import { useState } from "react";
import coin from "../assets/coin.png";

import "../App.css";

const Home = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="coins">
      <h1>PUBG LOVERS</h1>
      <div>
        <span>{count} uc</span>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)} id="glow-on-hover">
          <img src={coin} alt="" id="glow-on-hover"/>
        </button>
      </div>
    </div>
  );
};

export default Home;
