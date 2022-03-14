import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import "./FormsCard.css";

const FormsCard = (props) => {
  return (
    <div>
      {" "}
      <div className="flex flex-col rounded-[0.25rem] my-24 mx-auto w-[40vw] border border-2 border-oraange text-black ">
        <div className="px-8 py-8 bg-oraange mb-8">
          <a className="flex text-xl" href="/">
            <FaArrowLeft className="form-arrow-icon" /> Retour
          </a>
          <h2 className="text-center text-3xl font-semibold">{props.title}</h2>
        </div>
        {props.children}
      </div>
    </div>
  );
};

export default FormsCard;
