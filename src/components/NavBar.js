import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const pound = '#';

  return <nav>{
      links.map(
        (link)=>{
          return(
            <a key={link} href={pound+link}>{link}</a>
          )
        }
      )
    /* display an <a> tag for each link here */}</nav>;
}

export default NavBar;
