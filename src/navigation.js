import React from "react";
import Navbar from "./Components/navbar/navbar";

const Navigation = (props) => {
  return (
    <>
      <Navbar />
      {props.children}
    </>
  );
};

export default Navigation;
