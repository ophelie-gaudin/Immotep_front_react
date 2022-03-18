import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import "./FormsCard.css";

const FormsCard = (props) => {
  return (
    <div>
      {" "}
      <div className="flex flex-col rounded-[0.25rem] my-24 mx-auto w-[80vw] max-w-[700px] border-2 border-primary text-whiite ">
        <div className="px-8 py-8 bg-primary mb-8">
          <a className="flex items-center " href="/">
            <FaArrowLeft className="form-arrow-icon" /> Retour
          </a>
          <h2 className="text-center text-3xl font-pacifico">{props.title}</h2>
        </div>
        {props.children}
      </div>
    </div>
  );
};

export default FormsCard;
