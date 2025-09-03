import React from "react";
import Profile from "../components/Profile";
import Projects from "../components/Projects";
import Search from "../components/Search";
import Work from "../components/Work";

const Home = () => {
  return (
    <div>
      <Profile />
      <Search />
      <Projects />
      <Work />
    </div>
  );
};

export default Home;