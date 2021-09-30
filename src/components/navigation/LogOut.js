import React from "react";
import boyIcon from "../../img/boy.png";
const LogOut = () => {
  return (
    <div className="log-out-link-wrapper">
      <img className="log-out-icon" src={boyIcon} alt="man-icon" />
      <a className="log-out-link" href="#top">
        Log out
      </a>
    </div>
  );
};

export default LogOut;
