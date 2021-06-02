import React from "react";
export const Score = () => {
  return (
    <div className ="flex flex-row  w-8/12 mb-12 justify-around">
      <div className="flex flex-col ">
        <label htmlFor="Score">Score:</label>
        <input className ="border-2 border-black"type="text" value=" 0" />
      </div>
      <div className =" flex flex-col  ">
        <label htmlFor="">Max Score:</label>
        <input className ="border-2 border-black"type="text" value="1414" />
      </div>
    </div>
  );
};
