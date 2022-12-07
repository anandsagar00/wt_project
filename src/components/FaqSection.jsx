import React from "react";
import styled from "styled-components";
import { About } from "../styles";
import Toggle from "./Toggle";
import { AnimateSharedLayout } from "framer-motion";
import { useScroll } from "./useScroll";
import { scrollReveal } from "../animation";

function FaqSection() {
  const [element, controls] = useScroll();
  return (
    <Faq
      variants={scrollReveal}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      <h2>
        Any questions? <span>WHY KLE TECH?</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title="Highly Respected Brand in Industry">
          <div className="answer">
            <p>
              Distinctive character established by BVB in the academic space has
              been a spring board for KLE Tech to emerge as a brand to reckon
              with. Because of the cutting edge curriculum and quality of
              graduates, it has gained tremendous credibility with industries
              and employers
            </p>
            <p>
              KLE Tech is recognized as one of the top 10 engineering colleges
              in Karnataka. The Alumni of the Institute have done exceedingly
              well in all spheres of life at both national and international
              levels bringing respectful identity to Alma Mater.
            </p>
          </div>
        </Toggle>
        <Toggle title="Vibrant Campus Culture">
          <div className="answer">
            <p>
              The campus is a hub of co-curricular and extracurricular
              activities that offer many ways to get involved to make life
              outside the classroom exciting and rewarding. Various forums and
              clubs dole out opportunities for the students through technical
              competitions, seminars, workshops, cultural, social and literary
              events.
            </p>
            <p>
              What makes these activities especially brilliant is the fact that
              they are not focused solely on winning trophies but in providing
              an atmosphere to nurture the innate talent of students in the
              college.
            </p>
          </div>
        </Toggle>
        <Toggle title="Entrepreneurial Ecosystem">
          <div className="answer">
            <p>
              KLE Tech has proven to be one of the top universities for startup
              creation over the past few years.
            </p>
            <p>
              A new entrepreneurial and innovation culture is hallmark of KLE
              Tech campus.. This cultural movement was catalyzed by ‘Centre for
              Technology Innovation and Entrepreneurship’ (CTIE) through formal
              and informal activities across the campus.
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </Faq>
  );
}

const Faq = styled(About)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

export default FaqSection;
