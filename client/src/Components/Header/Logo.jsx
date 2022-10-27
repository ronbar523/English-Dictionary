import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <>
      <Link to="/" className= "line logo">
        <h5 className="fs-1">Ron</h5>
      </Link>
    </>
  );
};

export default Logo;
