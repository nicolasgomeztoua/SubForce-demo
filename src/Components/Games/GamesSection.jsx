import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ADD from "../ADD";
import Borochure from "./Borochure";
const Container = styled.div`
  display: grid;
  grid-template-columns: 17% 66% 17%;
  @media screen and (max-width: 1220px) {
    grid-template-columns: 100%;
    grid-template-rows: 7.5% 85% 7.5%;
  }
`;
const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50vh;
  margin-bottom: 50vh;
  @media screen and (max-width: 1220px) {
    margin: 50px 50px;
  }
`;
const GamesSection = () => {
  const [vertical, setVertical] = useState(true);

  const [windowInnerWidth, setwindowInnerWidth] = useState(window.innerWidth);

  const reportWindowSize = () => {
    setwindowInnerWidth(window.innerWidth);
  };
  window.addEventListener("resize", reportWindowSize);
  useEffect(() => {
    windowInnerWidth > 1220 ? setVertical(true) : setVertical(false);
  }, [windowInnerWidth]);
  return (
    <Container>
      <Wrap>
        <ADD vertical={vertical}></ADD>
      </Wrap>
      <Borochure></Borochure>
      <Wrap>
        <ADD vertical={vertical}></ADD>
      </Wrap>
    </Container>
  );
};

export default GamesSection;
