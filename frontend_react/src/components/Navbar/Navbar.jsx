import React, { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

import { images } from "../../constants";
import "./Navbar.scss";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logodami} alt="logo" />
      </div>
      <ul className="app__navbar-links">
        {["home", "about", "work", "skills", "contact"].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      <div className="desktop-button">
        <a
          href="https://drive.google.com/file/d/1pmBuSTQDQhBZxYGJmae1D4fkt-N0tAfZ/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          <button className="button">View resume</button>
        </a>
      </div>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {["home", "skills & experiences", "my projects", "contact"].map(
                (item) => (
                  <li key={item}>
                    <a href={`#${item}`} onClick={() => setToggle(false)}>
                      {item}
                    </a>
                  </li>
                )
              )}
              <a
                href="https://drive.google.com/file/d/1pmBuSTQDQhBZxYGJmae1D4fkt-N0tAfZ/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                <button className="button">View Resume</button>
              </a>
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
