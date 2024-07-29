import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import { client } from "../../client";
import "./Blogs.scss";

const Skills = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const blogsQuery = '*[_type == "blogs"]';

    client.fetch(blogsQuery).then((data) => {
      setBlogs(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">Technical Writeups</h2>

      <div className="app__skills-container">
        <motion.div>
          {blogs.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              key={skill.name}
            >
              <ul>
                <li
                  className="p-text"
                  style={{
                    backgroundColor: "#edf2f8",
                    padding: "10px",
                    borderRadius: "10px",
                    marginBottom: '10px'
                  }}
                >
                  <a
                    href={skill.link}
                    target="_blank"
                    rel="noreferrer"
                    style={{ fontSize: "20px" }}
                  >
                    {skill.title}
                  </a>
                </li>
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, "app__skills"),
  "skills",
  "app__whitebg"
);
