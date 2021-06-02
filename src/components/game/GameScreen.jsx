import React from "react";
import { TableGame } from "./TableGame";
import { Score } from "./Score";

export const GameScreen = () => {
  return (
    <div className=" flex flex-col justify-center items-center w-full h-full ">
      <Score />
      
      <TableGame />
    </div>
  );
};
