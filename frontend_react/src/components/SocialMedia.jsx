import React from "react";
import { BsLinkedin, BsTwitter, BsGithub } from "react-icons/bs";

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href='https://www.linkedin.com/in/damilola-adegbemile-a768b6b8' target="blank">
      <BsLinkedin />
      </a>
    </div>
  <div>
    <a href='https://github.com/damilola1ade' target="blank">
      <BsGithub />
    </a>
  </div>
    <div>
      <a href='https://www.twitter.com/7amilola/' target="blank">
      <BsTwitter />
      </a>
    </div>
  </div>
);

export default SocialMedia;

