import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import { client } from "../../client";
import "./Blogs.scss";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const blogsQuery = '*[_type == "blogs"]';

    client.fetch(blogsQuery).then((data) => {
      const sortedData = data.sort(
        (a, b) => new Date(b._createdAt) - new Date(a._createdAt)
      );
      setBlogs(sortedData);
    });
  }, []);

  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      <h2 className="head-text">Blog posts</h2>

      <div className="app__skills-container">
        {blogs.map((blog) => (
          <a href={blog.link} target="_blank" rel="noreferrer">
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              key={blog.name}
              className="blog-card"
            >
              <img
                src="/developer.jpg"
                alt={blog.title}
                className="blog-card__image"
              />
              <div className="blog-card__content">
                <h3 className="blog-card__title">{blog.title}</h3>

                <p className="blog-card__description">{blog.description}</p>
              </div>
            </motion.div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default AppWrap(
  MotionWrap(Blogs, "app__skills"),
  "blog",
  "app__whitebg"
);
