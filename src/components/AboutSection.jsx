import React from "react";
import home1 from "../img/home2.jpg";
import { About, Description, Image, Hide } from "../styles";
//Framer Motion
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnimation } from "../animation";
import Wave from "./Wave";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnim}>
              Creating <span>Value</span>{" "}
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              Leveraging <span>Knowledge</span>
            </motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Established in 1947 with an aspiration of creating an institution that
          would lay the foundation of modern engineering education in northern
          region of Karnataka.
        </motion.p>
        {/* <motion.button variants={fade}>
          {" "}
          <Link to="/contact">
            <p>Contact Us</p>
          </Link>
        </motion.button> */}
      </Description>
      <Image>
        <motion.img
          variants={photoAnimation}
          // initial="false"
          src={home1}
          alt="guy with a camera"
        />
      </Image>
      <Wave />
    </About>
  );
};

//Styled Components
export default AboutSection;
