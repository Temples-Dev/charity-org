import React from "react";

const Hero = () => {

    const handleDonate = () => {
        // TODO
    }

    const handleRead = () => {
        // TODO
    }

  return (
    <div className=" h-screen bg-hero-image relative text-white px-12 flex items-center flex-col justify-center ">
      <h1 className="font-bold text-8xl">Donate</h1>
      <h3 className="font-medium text-4xl">4 a better world</h3>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima dicta <br />
        labore possimus vero provident numquam, quas ipsum totam, saepe nulla <br />
        reprehenderit dolore ullam, voluptas harum officia recusandae sequi <br />
        eveniet voluptate?
      </p>

      <div className="flex gap-4 mt-4 ">
      <button
          className="bg-orange-600 text-white  py-2 px-4 rounded-full"
          onClick={handleDonate}
        >
          Donate Now
        </button>

        <button
          className="outline outline-orange-600 hover:bg-orange-600 text-white  py-2 px-4 rounded-full"
          onClick={handleRead}
        >
          Read Now
        </button>
      </div>
    </div>
  );
};

export default Hero;
