import React from "react";
import juneczka from "../img/juneczka.png";

import { About, Description, Image, Hide } from "../styles";
//Framer Motion
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../animation";
import Wave from "./Wave";
const AboutSection = () => {
   return (
      <About>
         <Description>
            <motion.div>
               <Hide>
                  <motion.h2 variants={titleAnim}>Fullstack web </motion.h2>
               </Hide>
               <Hide>
                  <motion.h2 variants={titleAnim}>
                     <span> development </span> and
                  </motion.h2>
               </Hide>
               <Hide>
                  <motion.h2 variants={titleAnim}> design services</motion.h2>
               </Hide>
            </motion.div>
            <motion.p variants={fade}>
               I am a 23 years old master degree student of computer science at the University of Silesia. For years I have been improving my skills in the field of web design constantly learning new
               technologies to create the best possible products. Over the past year, my portfolio has included websites and services for companies such as TVN, DELL, Innogy and many more. I am open
               to any kind of cooperation that will allow me to further develop my skills and broaden my knowledge.
            </motion.p>
            <Link to="/contact">
               <motion.button variants={fade}>Contact Me</motion.button>
            </Link>
         </Description>
         <Image>
            <motion.img variants={photoAnim} src={juneczka} alt="Hello, its a me, Dominik" />
         </Image>
         <Wave />
      </About>
   );
};

//Styled Components

export default AboutSection;
