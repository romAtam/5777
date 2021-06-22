import React, { useState } from "react";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import {
  homeObjOne,
  homeObjthree,
  homeObjTwo,
} from "../components/InfoSection/Data";
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <SideBar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjthree} />
    </>
  );
};

export default Home;
