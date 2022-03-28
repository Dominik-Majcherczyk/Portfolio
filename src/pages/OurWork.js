import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
//Images
import apollo from "../img/apollo.png";
import brandarea from "../img/brandarea.png";
import brodka from "../img/brodka.png";
import dell from "../img/dell.png";
import fundacja from "../img/fundacja.png";
import innogy from "../img/innogy.png";
import justby from "../img/justby.png";

//Animations
import { motion } from "framer-motion";
import { sliderContainer, slider, pageAnimation, fade, photoAnim, lineAnim } from "../animation";
import { useScroll } from "../components/useScroll";
import ScrollTop from "../components/ScrollTop";

const OurWork = () => {
   const [element, controls] = useScroll();
   const [element2, controls2] = useScroll();
   const [element3, controls3] = useScroll();
   const [element4, controls4] = useScroll();
   const [element5, controls5] = useScroll();
   const [element6, controls6] = useScroll();
   const [element7, controls7] = useScroll();
   return (
      <Work style={{ background: "#fff" }} exit="exit" variants={pageAnimation} initial="hidden" animate="show">
         <motion.div variants={sliderContainer}>
            <Frame1 variants={slider}></Frame1>
            <Frame2 variants={slider}></Frame2>
            <Frame3 variants={slider}></Frame3>
            <Frame4 variants={slider}></Frame4>
         </motion.div>

         <Movie>
            <motion.h2 variants={fade}>BrandArea</motion.h2>
            <motion.div variants={lineAnim} className="line"></motion.div>
            <Link to="/work/brandarea">
               <Hide>
                  <motion.img variants={photoAnim} src={brandarea} alt="athlete" />
               </Hide>
            </Link>
         </Movie>

         <Movie ref={element} variants={fade} animate={controls} initial="hidden">
            <h2>XPS revolt - DELL x Brodka</h2>
            <motion.div variants={lineAnim} className="line"></motion.div>
            <Link to="/work/brodka">
               <img src={brodka} alt="brodka" />
            </Link>
         </Movie>

         <Movie ref={element2} variants={fade} animate={controls2} initial="hidden">
            <h2>Innogy</h2>
            <motion.div variants={lineAnim} className="line"></motion.div>
            <Link to="/work/innogy">
               <img src={innogy} alt="innogy" />
            </Link>
         </Movie>

         <Movie ref={element3} variants={fade} animate={controls3} initial="hidden">
            <h2>TVN Foundation</h2>
            <motion.div variants={lineAnim} className="line"></motion.div>
            <Link to="/work/fundacja">
               <img src={fundacja} alt="fundacja" />
            </Link>
         </Movie>

         <Movie ref={element4} variants={fade} animate={controls4} initial="hidden">
            <h2>Landpages series for DELL</h2>
            <motion.div variants={lineAnim} className="line"></motion.div>
            <Link to="/work/dell">
               <img src={dell} alt="dell" />
            </Link>
         </Movie>

         <Movie ref={element5} variants={fade} animate={controls5} initial="hidden">
            <h2>JustBy</h2>
            <motion.div variants={lineAnim} className="line"></motion.div>
            <Link to="/work/justby">
               <img src={justby} alt="justby" />
            </Link>
         </Movie>

         <Movie ref={element6} variants={fade} animate={controls6} initial="hidden">
            <h2>Apollo 360</h2>
            <motion.div variants={lineAnim} className="line"></motion.div>
            <Link to="/work/apollo">
               <img src={apollo} alt="apollo" />
            </Link>
         </Movie>
         <ScrollTop />
      </Work>
   );
};

const Work = styled(motion.div)`
   min-height: 100vh;
   overflow: hidden;
   padding: 5rem 20rem;
   @media (max-width: 1300px) {
      padding: 2rem 2rem;
   }

   h2 {
      padding: 1rem 0rem;
   }
`;
const Movie = styled(motion.div)`
   padding-bottom: 10rem;

   .line {
      height: 0.5rem;
      background: #23d997;
      margin-bottom: 3rem;
   }
   img {
      width: 100%;
      height: 40vh;
      object-fit: cover;
      object-position: 20%;
   }
`;
const Hide = styled.div`
   overflow: hidden;
`;

//Frame Animation
const Frame1 = styled(motion.div)`
   position: fixed;
   left: 0;
   top: 10%;
   width: 100%;
   height: 100vh;
   background: #fffebf;
   z-index: 2;
`;
const Frame2 = styled(Frame1)`
   background: #ff8efb;
`;
const Frame3 = styled(Frame1)`
   background: #8ed2ff;
`;
const Frame4 = styled(Frame1)`
   background: #8effa0;
`;

export default OurWork;
