import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Card from "../components/Card";
import WelcomeMsg from "../components/WelcomeMsg";
import { LuHeartHandshake } from "react-icons/lu";
import Volunteers from "../components/Volunteers";
import Footer from "../components/Footer";
import Faqs from "../components/Faqs";

const Home = () => {
  return (
    <>
      <Header email="charityorg@example.com" phone="+233 123 123 0000" />
      <Hero />

      <div className=" h-screen flex items-center px-12 gap-10">
        <Card
          icon={<LuHeartHandshake />}
          heading="Be come A volunteer"
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus vestib ulum mauris quis aliquam."
        />
        <Card
          icon={<LuHeartHandshake />}
          heading="Be come A volunteer"
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus vestib ulum mauris quis aliquam."
        />
        <Card
          icon={<LuHeartHandshake />}
          heading="Be come A volunteer"
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus vestib ulum mauris quis aliquam."
        />
      </div>

      <WelcomeMsg />

      <Volunteers />

      <Faqs />
      <Footer />
    </>
  );
};

export default Home;
