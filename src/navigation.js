import React, { useEffect } from "react";
import Navbar from "./Components/navbar/navbar";

const Navigation = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [window.location.pathname]);

  return (
    <>
      <Navbar />
      {props.children}
    </>
  );
};

export default Navigation;
