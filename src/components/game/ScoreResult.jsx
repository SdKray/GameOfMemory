import React from "react";
const userscorefixture = [
  {
    name: "Juan",
    score: 1023,
  },
  {
    name: "luis",
    score: 23245,
  },
  {
    name: "Vali",
    score: 1113,
  },{
    name: "",
    score: 1,
  },
  {
    name: "",
    score: 1,
  },
  {
    name: "",
    score: 1,
  },{
    name: "",
    score: 1,
  }
];
export const ScoreResult = () => {
  return (
    <div className="">
      <h1 className="">Tabla Score</h1>
      <table className=" border-2 w-3/12 h-3/5 rounded-lg border-black">
        {userscorefixture.map((user) => {
          return (
            <>
              <tr className="bg-gray-600 rounded-lg border-black">
                <td className="">{user.name}</td>
                <td>{user.score}</td>
              </tr>
            </>
          );
        })}
      </table>
    </div>
  );
};
