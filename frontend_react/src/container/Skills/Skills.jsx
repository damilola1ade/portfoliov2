import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [gridStyle, setGridStyle] = useState({
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)", // Default to 4 items per row
    gap: "1.5rem",
    width: "100%",
    maxWidth: "1200px",
  });

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth <= 768) {
        // Small devices
        setGridStyle((prev) => ({
          ...prev,
          gridTemplateColumns: "repeat(2, 1fr)", // 3 items per row
        }));
      } else {
        // Larger devices
        setGridStyle((prev) => ({
          ...prev,
          gridTemplateColumns: "repeat(5, 1fr)", // Default 4 items per row
        }));
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Call on component mount

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
  }, []);

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "2rem",
  };

  const itemStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "1rem",
    backgroundColor: "#f8f8f8",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s ease",
  };

  const iconContainerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100px",
    height: "80px",
    borderRadius: "50%",
    marginBottom: "1rem",
  };

  const imgStyle = {
    width: "50%",
    height: "50%",
    objectFit: "contain",
  };

  const textStyle = {
    margin: "0",
    fontSize: "1rem",
    fontWeight: "bold",
    color: "#333",
    textAlign: 'center'
  };

  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      <h2 className="head-text">Skills</h2>

      <div style={containerStyle}>
        <motion.div style={gridStyle}>
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              style={itemStyle}
              key={skill.name}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "translateY(-10px)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "translateY(0)")
              }
            >
              <div
                style={{
                  ...iconContainerStyle,
                  backgroundColor: skill.bgColor,
                }}
              >
                <img src={urlFor(skill.icon)} alt={skill.name} style={imgStyle} />
              </div>
              <p style={textStyle}>{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default AppWrap(
  MotionWrap(Skills, "app__skills"),
  "skills",
  "app__bg"
);
