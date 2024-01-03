import React from "react";
import boy from "../assets/africa-black-boy.jpg";
const WelcomeMsg = () => {

    const handleRead = () => {
        // TODO
    }

  return (
    <div className=" relative bg-welcome-image h-screen text-white px-12 py-12 flex items-center gap-8">
      <div className="w-2/4">
        <h2 className="font-semibold text-3xl mb-8">Welcome to our charityorg <br /> <br />
        
        <hr className="bg-orange-600 h-1 w-16 rounded-full" />
        
        </h2>

        <p className="text-sm leading-8 mb-10 text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus
          vestib ulum mauris quis aliquam. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Mauris tempus vestibulum mauris quis
          aliquam. Integer accumsan sodales odio, id tempus velit ullamcorper
          id. Quisque at erat eu libero consequat tempus. Quisque molestie
          convallis tempus. Ut semper purus metus, a euismod sapien sodales ac.
          Duis viverra eleifend fermentum
        </p>

        <button
          className=" bg-orange-600 hover:bg-orange-700 py-2 px-4 rounded-full"
          onClick={handleRead}
        >
          Read More
        </button>
      </div>
      <div><img src={boy} alt="african boy" /></div>
    </div>
  );
};

export default WelcomeMsg;
