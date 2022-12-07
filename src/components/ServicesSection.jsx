import React from "react";
//Import Icons
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home1.jpg";
//Styles
import styled from "styled-components";
import { About, Description, Image } from "../styles";
//Animation
import { scrollReveal } from "../animation";
import { useScroll } from "./useScroll";

function ServicesSection() {
  const [element, controls] = useScroll();
  return (
    <Services
      variants={scrollReveal}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      <Description>
        <h2>
          High <span>quality</span> education{" "}
        </h2>
        <Cards>
          <Card>
            <div className="icon">
              <img src={clock} alt="clock" />
              <h3>Minors that take you Beyond</h3>
            </div>
            <p>
              Distinctive character established by BVB in the academic space has
              been a spring board for KLE Tech
            </p>
          </Card>
          <Card>
            <div className="icon">
              <img src={teamwork} alt="teamwork" />
              <h3>Unrivalled Student Achievements</h3>
            </div>
            <p>
              The accolades they have won in the last few years are testament to
              their inventiveness and creativity.
            </p>
          </Card>
        </Cards>
      </Description>
      <Image>
        <img src={home2} alt="" />
      </Image>
    </Services>
  );
}

const Services = styled(About)`
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
      color: white;
      padding: 1rem;
    }
  }
`;

export default ServicesSection;
