import React from "react";
import Links from './Links';

function NavBar() {
  const links = ["home", "about", "projects"];
const lin = links.map((link) => {return <a key={link} href = {"#"+link}>{link}</a>})

  return <nav>{lin} </nav>;
}

export default NavBar;