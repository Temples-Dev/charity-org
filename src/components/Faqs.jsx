import React from "react";

import Accordion from "./Accordion";

const Faqs = () => {

  const [message, setMessage] = React.useState("")
  const [email, setEmail] = React.useState("")

  const accordionItems = [
    { title: "Section 1", content: "Content for Section 1" },
    { title: "Section 2", content: "Content for Section 2" },
    { title: "Section 3", content: "Content for Section 3" },
    { title: "Section 4", content: "Content for Section 4" },
    { title: "Section 5", content: "Content for Section 5" },
    { title: "Section 6", content: "Content for Section 6" },
  ];

  const handleSubmit = (e) => {
    // TODO
   
  };
 
  const handleEmail = (e) => {
      setEmail(e.target.value)
     
      console.log(e.target.value)
    
  }
 
  const handleMessage = (e) => {
    setMessage(e.target.value)
    console.log(e.target.value)
  }

 


  return (
    <div className=" h-screen flex  gap-12 px-12 justify-center items-center border-t-0 shadow-3xl border-orange-500">
      <div className="flex-1">
        <h2 className="font-semibold text-3xl mb-10">
          Frequently Asked Question
        </h2>

        <div className="container mx-auto p-4">
          <Accordion items={accordionItems} />
        </div>
      </div>

      <div className="flex-1">
        <h2 className="font-semibold text-3xl mb-5">
          Do you have any specific question?
        </h2>
        <p className="text-sm mb-4">
          Please fill the form below and how dedicated team would be in touch
          with you as soon as possible
        </p>

        <form action="" method="post" className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={handleEmail}
            placeholder="please enter your email address"
            className="border py-2 px-3 text-slate-400 outline-none focus:outline-orange-500 focus:outline-1"
          />

          <textarea
            className="text-slate-400 outline outline-1 focus:outline-orange-500 focus:outline-1 placeholder:px-3 resize-none"
            name="textbox"
            id="textbox"
            cols="20"
            rows="8"
            placeholder="please enter your enquiry"
            value={message}
            onChange={handleMessage}
          ></textarea>

          <button
            className=" bg-orange-600 hover:bg-orange-700 py-2 px-4 rounded-xl text-white"
           
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Faqs;
