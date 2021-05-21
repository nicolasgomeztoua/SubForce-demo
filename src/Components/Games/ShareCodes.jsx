import React from "react";
import styled from "styled-components";
const Wrap = styled.section`
  margin-top: 50px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const Title = styled.h2`
  font-size: 2.441rem;
  color: #2d6e9c;
  text-align: center;
`;
const Subtitle = styled.h3`
  font-size: 1.563rem;
  text-align: center;
  padding: 2rem;
  font-weight: 100;
`;
const ShareCodes = () => {
  return (
    <Wrap>
      <Title>Do you want to share your friends codes?</Title>
      <Subtitle>
        This website has been is created to find active friend codes. Don't wait
        any longer!<br></br>Find friends in the games you like and share your
        own friend code.
      </Subtitle>
    </Wrap>
  );
};

export default ShareCodes;
