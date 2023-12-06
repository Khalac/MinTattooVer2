import React, { useEffect } from "react";
import "./Header.scss";

import { HashLink } from "react-router-hash-link";

import logo from "../assets/logo/logored.webp";

function Header() {
  return (
    <div className="Header">
      <div className="Pages">
        <HashLink
          className="Page"
          to="/#Home"
          scroll={(el) =>
            el.scrollIntoView({ behavior: "smooth", block: "center" })
          }
        >
          Home
        </HashLink>
        <HashLink
          className="Page"
          smooth
          to="/#Artist"
          scroll={(el) =>
            el.scrollIntoView({ behavior: "smooth", block: "center" })
          }
        >
          Artist
        </HashLink>
        <img src={logo} alt="logo" className="logoHeader" loading="lazy" />
        <HashLink
          className="Page"
          smooth
          to="/#Contact"
          scroll={(el) =>
            el.scrollIntoView({ behavior: "smooth", block: "center" })
          }
        >
          Contact
        </HashLink>
        <HashLink
          className="Page"
          smooth
          to="/#FAQ"
          scroll={(el) =>
            el.scrollIntoView({ behavior: "smooth", block: "center" })
          }
        >
          FAQ
        </HashLink>
      </div>
      <div className="TattooStu">Tattoo Studio</div>
    </div>
  );
}

export default Header;
