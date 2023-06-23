import React from "react";
import axios from "../axios/axios";

const Home = () => {
  return (
    <div className="relative mt-[75px]">
      <button
        onClick={() => axios.get("/logout")}
      >
        Log out
      </button>
    </div>
  );
};

export default Home;
