import React from "react";
import Header from "../Header";
import Hero from "../Hero";
import Card from "../Card";
import WelcomeMsg from "../WelcomeMsg";
import { LuHeartHandshake } from "react-icons/lu";
import Volunteers from "../Volunteers";
import Footer from "../Footer";
import Faqs from "../Faqs";

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
