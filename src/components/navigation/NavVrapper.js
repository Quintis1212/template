import React from "react";
import LogOut from "./LogOut";
import NavLink from "./NavLink";

export const NavVrapper = () => {
  const links = ["DASHBOARD", "INSTANCES", "PAIRS", "ABOUT", "HELP", "CONTACT"];
  return (
    <div className="nav-wrapper">
      <div className="links-wrapper">
        {links.map((link) => {
          return <NavLink linkLabel={link} key={link} />;
        })}
      </div>

      <LogOut />
    </div>
  );
};
