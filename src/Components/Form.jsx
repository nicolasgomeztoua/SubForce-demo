import React from "react";
import styled from "styled-components";
import Controller from "../Assets/controller.jpg";
import Shapes from "../Assets/shapes.png";
const Background = styled.div`
  display: flex;
  justify-content: center;
  background: url(${Controller});
  background-size: 50vw;
  background-position: left;
  background-repeat: no-repeat;
`;
const Backdrop = styled.div`
  background: url(${Shapes});
  background-size: 120%;
  background-position: center center;
  width: 100%;
  height: auto;
  padding-top: 50px;
  background-repeat: no-repeat;
`;
const WhiteSpace = styled.div`
  background: white;
  width: 66%;
`;
const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.h2`
  display: flex;
  justify-content: center;
  font-size: 2.441rem;
  color: #4290c7;
  font-weight: 600;
  border-bottom: 4px solid #4290c7;
  text-transform: uppercase;
  margin-bottom: 30px;
  width: 50%;
  text-align: center;
`;
const Subtitle = styled.h3`
  text-align: center;
  font-size: 1.25rem;
  color: black;
  font-weight: 700;
  width: 50%;
`;
const Desc = styled.h4`
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  font-size: 1rem;
  font-weight: 100;
  margin: 10px;
`;
const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10% auto;
`;
const Input = styled.input`
  border: 2px solid #2d6e9c;
  width: 50%;
  height: 30px;
  padding: 5px;
  margin-bottom: 50px;
  &::placeholder {
    opacity: 1;
    font-weight: 600;
  }
  background: rgba(45, 110, 156, 0.2);
`;
const TextField = styled.textarea`
  background: rgba(45, 110, 156, 0.2);
  border: 2px solid #2d6e9c;
  width: 50%;
  height: 300px;
  padding: 5px;
  margin-bottom: 50px;
  &::placeholder {
    opacity: 1;
    font-weight: 500;
  }
`;
const Submitbtn = styled.button`
  background: #2d6e9c;
  outline: none;
  border: none;
  width: 100px;
  height: 30px;
  font-weight: 700;
  color: white;
  letter-spacing: 1.5px;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
`;
const Form = () => {
  return (
    <Background>
      <WhiteSpace>
        <Backdrop>
          <Text>
            <Title>contact us</Title>
            <Subtitle>
              Would you like to add a game? Do you have any suggestions for us
              to improve?
            </Subtitle>
            <Desc>Please fill in the form below</Desc>
          </Text>
          <FormContainer>
            <Input type="text" placeholder="Full Name"></Input>
            <Input type="email" placeholder="Email"></Input>
            <TextField placeholder="Message"></TextField>
            <Submitbtn type="submit">SEND</Submitbtn>
          </FormContainer>
        </Backdrop>
      </WhiteSpace>
    </Background>
  );
};

export default Form;
