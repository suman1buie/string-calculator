import React, { useState } from "react";
import { doAdditionFromString } from "../Logic/calculateLogic";
import "../App.css";

const Home = () => {
  const [inputString, setInputString] = useState("");
  const [total, setTotal] = useState(null);

  return (
    <div className="outer-wrapper">
      <div className="input-wrapper">
        <input
          type="text"
          placeholder="Enter your string"
          value={inputString}
          onChange={(e) => setInputString(e.target.value)}
        />
        <button
          onClick={() => {
            setTotal(doAdditionFromString(inputString));
            setInputString("");
          }}
        >
          Calculation
        </button>
      </div>
      <div className="display-value">Sum is : {total ? total : 0}</div>
    </div>
  );
};

export default Home;
