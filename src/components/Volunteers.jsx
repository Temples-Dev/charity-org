import React from "react";
import volunteer1 from "../assets/vol1.jpg";

const Volunteers = () => {
  return (
    <div className=" h-screen flex flex-col items-center justify-center px-12">
      <div className="flex flex-col items-center m-10 text-center">
        <h2 className="font-semibold text-3xl mb-2">
          Meet Our Volunteers <br />
          <hr className="bg-orange-600 h-1 w-16 rounded-full" />
        </h2>
        <p>
          Help today because tomorrow you may be the one <br /> who needs more
          helping!
        </p>
      </div>

      <div className="flex gap-10">
        <ImageComposable
          image={volunteer1}
          name="Dev dev dev"
          designation="marketer"
        />
        <ImageComposable
          image={volunteer1}
          name="Dev dev dev"
          designation="marketer"
        />
        <ImageComposable
          image={volunteer1}
          name="Dev dev dev"
          designation="marketer"
        />
        <ImageComposable
          image={volunteer1}
          name="Dev dev dev"
          designation="marketer"
        />
      </div>
    </div>
  );
};

export default Volunteers;

const ImageComposable = (props) => {
  return (
    <div className="rounded-3xl h-64 w-64 relative overflow-hidden  ">
      <img
        className="hover:scale-105 transition-transform duration-300"
        src={props.image}
        alt="volunteer"
      />

      <div className="absolute inset-0 flex flex-col items-center justify-end py-8 bg-gradient-to-b from-transparent to-black opacity-0 hover:opacity-100 transition-opacity duration-300">
        <div className="flex flex-col items-center">
          <p className="text-lg font-semibold text-orange-600">{props.name}</p>
          <p className="text-sm text-white">{props.designation}</p>
        </div>
      </div>
    </div>
  );
};
