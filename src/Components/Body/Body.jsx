import React from "react";
import styled from "styled-components";
import Controller from "../../Assets/controller-flipped.jpg";
import ADD from "../ADD";
const Container = styled.div`
  display: flex;
  flex-direction: row-reverse;
  height: 60vh;
`;
const Wrap = styled.div`
  display: flex;
  justify-self: flex-end;
  align-self: flex-end;
  align-items: center;

  flex-direction: column;
  height: 60vh;
  width: 100vw;
  background-image: url(${Controller});
  background-size: 100% 100%;
  background-position: left 2vw top;
  background-repeat: no-repeat;
  background-repeat: no-repeat;
`;
const Heading = styled.h2`
  padding: 1rem;
  padding-top: 30px;
  font-size: 31.25px;
  color: white;
  display: flex;
  justify-content: center;
  text-align: center;
`;
const Button = styled.button`
  margin: 50px;
  background: white;
  border: none;
  outline: none;
  width: 200px;
  height: 105px;
  width: 250px;
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;
  &:hover {
    transform: scale(1.04);
  }
`;

const Body = () => {
  return (
    <Container>
      <Wrap>
        <Heading>Make new friends in your favourite games</Heading>
        <Button>DISCOVER</Button>
        <ADD vertical={false}></ADD>
      </Wrap>
    </Container>
  );
};

export default Body;
