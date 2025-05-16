import React from "react";
import Landing from "./src/components/Landing";
import Highlights from "./src/components/Highlights";
import Featured from "./src/components/Featured";
import CheapestBooks from "./src/components/CheapestBooks";
import Explore from "./src/components/Explore";

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
