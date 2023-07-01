import React from "react";
import Hero from "../components/Hero";
import useRouteLoad from "../components/useRouteLoad";

const Home = () => {
  useRouteLoad();

  return (
    <div>
      <Hero />
    </div>
  );
};

export default Home;
