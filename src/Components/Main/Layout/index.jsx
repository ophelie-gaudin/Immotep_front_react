import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout(props) {
  return (
    <div>
      <Navbar />
      <div className="h-[60px]"></div>
      {props.children}

      <Footer />
    </div>
  );
}
