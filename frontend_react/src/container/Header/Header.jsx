import React from "react";
import { motion } from "framer-motion";

import { AppWrap } from "../../wrapper";
import { images } from "../../constants";
import "./Header.scss";

const Header = () => (
  <div className="app__header header__flex">
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__header-info"
    >
      <div className="app__header-badge">
        <div className="badge-cmp app__flex">
          <span>👋</span>
          <div style={{ marginLeft: 20 }}>
            <p className="p-text" style={{ color: "black" }}>
              Hi, I'm
            </p>
            <h1 className="head-text">Damilola</h1>
          </div>
        </div>

        <div className="tag-cmp app__flex">
          <p className="p-text">
            A passionate full stack engineer with a keen eye for creating
            stunning user interfaces and immersive web experiences.{" "}
          </p>
        </div>
        <div className="tag-cmp app__flex">
          <p className="p-text">
            With 4 years of experience in the industry, I have honed my skills
            in full stack development, particularly with React, TypeScript and
            Node.JS. I have a strong background in creating and optimizing user
            interfaces, ensuring that the user experience is seamless and
            engaging.
          </p>
        </div>
      </div>
    </motion.div>

    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__header-img"
    >
      <img src={images.hero} alt="profile_bg" />
    </motion.div>
  </div>
);

export default AppWrap(Header, "home");
