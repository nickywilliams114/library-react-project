import React from "react";
import Landing from "../components/Landing";
import Highlights from "../components/Highlights";
import Featured from "../components/Featured";
import CheapestBooks from "../components/CheapestBooks";
import Explore from "../components/Explore";

const Home = () => {
  return (
    <>
      <Landing />
      <main>
        <Highlights />
        <Featured />
        <CheapestBooks />
        <Explore />
      </main>
    </>
  );
};

export default Home;
