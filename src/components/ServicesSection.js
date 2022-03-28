import React from "react";
//Import Icons
import { ReactComponent as Frontend } from "../img/frontend.svg";
import { ReactComponent as Backend } from "../img/backend.svg";
import { ReactComponent as Design } from "../img/design.svg";
import { ReactComponent as Team } from "../img/team.svg";
import computer from "../img/computer.png";
//Styles
import { About, Description, Image } from "../styles";
import styled from "styled-components";
import { scrollReveal } from "../animation";
import { useScroll } from "./useScroll";

const ServicesSection = () => {
   const [element, controls] = useScroll();
   return (
      <Services variants={scrollReveal} animate={controls} initial="hidden" ref={element}>
         <Description>
            <h2>
               High <span>quality</span> services
            </h2>
            <Cards>
               <Card>
                  <div className="icon">
                     <Frontend />
                     <h3>Frontend</h3>
                  </div>
                  <p>Page views in the latest standards</p>
               </Card>
               <Card>
                  <div className="icon">
                     <Backend />
                     <h3>Backend</h3>
                  </div>
                  <p>CMS systems and backend based on node.js</p>
               </Card>
               <Card>
                  <div className="icon">
                     <Design />
                     <h3>UI Design</h3>
                  </div>
                  <p>Mobile first design with best practices</p>
               </Card>
               <Card>
                  <div className="icon">
                     <Team />
                     <h3>Teamplay</h3>
                  </div>
                  <p>Teamwork and communication skills</p>
               </Card>
            </Cards>
         </Description>
         <Image>
            <img alt="camera" src={computer} />
         </Image>
      </Services>
   );
};

const Services = styled(About)`
   svg {
      height: 50px;
      width: 50px;
      fill: rgb(35, 217, 151);
   }
   h2 {
      padding-bottom: 5rem;
   }
   p {
      width: 70%;
      padding: 2rem 0rem 4rem 0rem;
   }
`;

const Cards = styled.div`
   display: flex;
   flex-wrap: wrap;
   @media (max-width: 1300px) {
      justify-content: center;
   }
`;

const Card = styled.div`
   flex-basis: 20rem;
   .icon {
      display: flex;
      align-items: center;
      h3 {
         margin-left: 1rem;
         background: white;
         color: black;
         padding: 1rem;
      }
   }
`;

export default ServicesSection;
