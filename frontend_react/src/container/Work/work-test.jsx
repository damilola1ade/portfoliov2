import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./Work.scss";

const Work = () => {
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  useEffect(() => {
    const query = '*[_type == "works"]';

    client.fetch(query).then((data) => {
      const sortedData = data.sort(
        (a, b) => new Date(b._createdAt) - new Date(a._createdAt)
      );
      setWorks(sortedData);
      setFilterWork(sortedData);
    });
  }, []);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === "All") {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  return (
    <>
      <h2 className="head-text">
        My <span>Projects</span>
      </h2>

      <div className="app__work-filter">
        {["UI/UX", "Web App", "All"].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${
              activeFilter === item ? "item-active" : ""
            }`}
          >
            {item}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWork.map((work, index) => (
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop:'32px'
            }}
            key={index}
          >
            <div style={{display:'flex', flexDirection: 'column'}}>
              <h2 style={{ color: "black" }}>{work.title}</h2>
              <p className="p-text" style={{ marginTop: 10 }}>
                {work.description}
              </p>

              <div style={{ width: "100%" }}>
                <p className="p-text" style={{ marginTop: 6, marginBottom: 6 }}>
                  Technologies used:
                </p>

                {work?.technologies?.map((responsibility, index) => (
                  <motion.div
                    whileInView={{ opacity: [0, 1] }}
                    transition={{ duration: 0.5 }}
                    key={index}
                  >
                    <ul>
                      <li className="p-text" style={{ color: "black" }}>
                        {responsibility}
                      </li>
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5, delayChildren: 0.5 }}
                className="app__header-img"
              >
                <img src={urlFor(work.imgUrl)} alt={work.name} />
              </motion.div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Work, "app__works"),
  "work",
  "app__primarybg"
);
