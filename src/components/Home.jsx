import React from "react";
import Navbar from "./Navbar";
import Search from "./Search";
const Home = () => {
  return (
    <div className="bg-white h-screen flex flex-col">
      <Navbar />
      <Search />
    </div>
  );
};

export default Home;
