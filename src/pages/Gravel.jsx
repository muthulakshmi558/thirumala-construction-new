import React from "react";
import TopBar from "../components/TopBar";
import Header from "../components/Header";
import GravelHero from "../components/GravelHero";
import GravelSecondfold from "../components/GravelSecondfold"
import CallNowBox from "../components/CallNowBox";
import Footer from "../components/Footer";

function GravelPage() {
  return (
    <>
      <TopBar />
      <Header />
      <GravelHero/>
      <GravelSecondfold />
      <CallNowBox />
      <Footer />
    </>
  );
}

export default GravelPage;