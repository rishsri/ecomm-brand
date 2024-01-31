import React, { Fragment } from "react";
import RightCartIcon from "../cart/RightCartIcon";

const  Footer = () => {
  return (
    <Fragment>
      <RightCartIcon />
      <div className="text-center bg-dark text-white py-2 fixed-bottom">
        <span>
          Copyright & Developed by{" "}
          <a href="https://www.linkedin.com/in/rishabh-connects/" target="blank">
            Rishabh
          </a>
        </span>
      </div>
    </Fragment>
  );
}

export default Footer;
