import React, { useState } from 'react';
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="w-full">
      {items.map((item, index) => (
        <div key={index} className="mb-2">
          <div
            className="bg-gray-500 p-2 cursor-pointer rounded-md text-white"
            onClick={() => toggleAccordion(index)}
          >
            <div className="flex justify-between items-center">
              <p className="font-semibold">{item.title}</p>
              <span>{activeIndex === index ? <BsChevronDown /> : <BsChevronUp />}</span>
            </div>
          </div>
          {activeIndex === index && (
            <div className="bg-white p-2 ">
              <p>{item.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
