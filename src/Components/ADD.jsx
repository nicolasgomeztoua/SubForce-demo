import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background: #9dbcd4;
  height: 200px;
  width: ${({ vertical }) => (vertical ? "100%" : "70vw")};
  padding: ${({ vertical }) => (vertical ? "0 400px" : "0")};
  display: flex;
  justify-self: center;
  justify-content: center;
  align-items: center;
  transform: ${({ vertical }) => (vertical ? "rotate(90deg)" : "none")};
`;
const Header = styled.h3`
  font-size: 1.563rem;
  transform: ${({ vertical }) => (vertical ? "rotate(-90deg)" : "none")};
`;
const ADD = ({ vertical }) => {
  return (
    <Container vertical={vertical}>
      <Header vertical={vertical}>ADD</Header>
    </Container>
  );
};

export default ADD;
