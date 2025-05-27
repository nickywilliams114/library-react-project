import React from "react";
import Landing from "../components/Landing";
import Highlights from "../components/Highlights";
import Featured from "../components/Featured";
import DiscountedBooks from "../components/DiscountedBooks";
import Explore from "../components/Explore";

const Home = () => {
  return (
    <>
      <Landing />
      <main>
        <Highlights />
        <Featured />
        <DiscountedBooks />
        <Explore />
      </main>
    </>
  );
};

export default Home;
