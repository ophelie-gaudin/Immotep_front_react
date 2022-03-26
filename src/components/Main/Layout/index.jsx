import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout(props) {
  return (
    <div className=" !min-h-[100vh] flex flex-col justify-between">
      <Navbar />
      <div className="h-[100px]"></div>
      {props.children}

      <Footer />
    </div>
  );
}
