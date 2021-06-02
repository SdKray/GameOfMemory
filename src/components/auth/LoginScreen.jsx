import React from "react";

export const LoginScreen = () => {
  return (
    <div className=" flex flex-col justify-center items-center w-full h-full bg-gray-700">
      <div className="flex flex-col  w-3/12 h-3/5 mb-12 p-4  justify-around rounded-lg shadow-lg bg-white">
        <h1 className="font-serif text-4xl font-black">LOGIN</h1>

        <label className=" font-serif text-2xl" htmlFor="Score">
          Email:
        </label>
        <input className="h-8 rounded-lg bg-gray-300" type="text" value=" " />
        <label className="font-serif text-2xl" htmlFor="">
          Pasword:
        </label>
        <input type="password" className="h-8 rounded-lg  bg-gray-300" />
        <a className=" text-blue-500 text-right"href="/">
          Forget Pasword?
        </a>
        <button className="h-12 text-3xl rounded-lg bg-blue-500 text-white">
          LOGIN IN 
        </button>
        <hr className ="border-gray-700 border-t-2 border-2 border-black" />
        <button className="h-12 text-2xl rounded-lg bg-green-500 text-white">
          Create New Account
        </button>
      </div>
    </div>
  );
};
