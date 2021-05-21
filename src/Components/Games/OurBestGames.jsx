import React from "react";
import styled from "styled-components";
import Pokemon from "../../Assets/pokemon.png";
import MarioKart from "../../Assets/s.svg";
import AnimalCrossing from "../../Assets/AnimalCrossing.jpeg";
const Wrap = styled.div`
  display: flex;
  justify-content: center;

  flex-direction: column;
`;

const Title = styled.h3`
  font-size: 2.441rem;
  border-bottom: 0.5px solid #2d6e9c;
  padding: 1rem 7rem;
  color: #2d6e9c;
  font-weight: 700;
  margin-top: 50px;
  text-transform: uppercase;
  display: flex;
  justify-content: center;

  text-align: center;
  width: 60%;
`;
const Subtitle = styled.h4`
  font-size: 1.25rem;
  color: #68b5ec;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  width: 400px;
  padding-right: 150px;
  @media screen and (max-width: 780px) {
    padding: 0;
  }
`;
const FeaturedGames = styled.div`
  display: grid;
  grid-template-columns: 33% 33% 33%;
  margin-top: 50px;
  margin-left: 5%;
  @media screen and (max-width: 780px) {
    grid-template-columns: 100%;
    grid-template-rows: (3, 33%);
  }
`;
const TextWrap = styled.div`
  margin-top: 50px;
  @media screen and (max-width: 780px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;
const Diamondwrap = styled.div`
  display: flex;

  justify-content: space-between;
  background: white;
  transform: rotate(-45deg);
  border: 10px solid #2d6e9c;
  width: 130px;
  padding: 0 2px;
  margin-left: 60px;
  @media screen and (max-width: 780px) {
    margin-left: 60px;
    margin-right: 60px;
  }
`;
const ImageDiamond = styled.img`
  width: 100px;
  height: 100px;
  transform: rotate(45deg);
  background: white;
`;

const BlackBackground = styled.div`
  background: black;
  margin: 3px;
`;
const Paragraph = styled.div`
  font-size: 1rem;

  min-width: 100px;
  max-width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 10px;
  @media screen and (max-width: 780px) {
    margin-bottom: 25px;
  }
`;
const FlexContainer = styled.div`
  @media screen and (max-width: 780px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;
const OurBestGames = () => {
  return (
    <Wrap>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Title>Our best games</Title>
      </div>
      <FeaturedGames>
        <FlexContainer>
          <Diamondwrap>
            <BlackBackground>
              <ImageDiamond src={MarioKart} alt="pokemon"></ImageDiamond>
            </BlackBackground>{" "}
          </Diamondwrap>{" "}
          <TextWrap>
            <Subtitle>Mario Kart Tour</Subtitle>
            <Paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
              voluptatum placeat? Exercitationem ab ea cupiditate.
            </Paragraph>
          </TextWrap>
        </FlexContainer>
        <FlexContainer>
          <Diamondwrap>
            <BlackBackground>
              <ImageDiamond src={Pokemon} alt="pokemon"></ImageDiamond>
            </BlackBackground>{" "}
          </Diamondwrap>
          <TextWrap>
            <Subtitle>Pokemon Go</Subtitle>
            <Paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
              voluptatum placeat? Exercitationem ab ea cupiditate.
            </Paragraph>
          </TextWrap>
        </FlexContainer>
        <FlexContainer>
          <Diamondwrap>
            <BlackBackground>
              <ImageDiamond src={AnimalCrossing} alt="pokemon"></ImageDiamond>
            </BlackBackground>{" "}
          </Diamondwrap>
          <TextWrap>
            <Subtitle>Animal Crossing NH</Subtitle>
            <Paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
              voluptatum placeat? Exercitationem ab ea cupiditate.
            </Paragraph>
          </TextWrap>
        </FlexContainer>
      </FeaturedGames>
    </Wrap>
  );
};

export default OurBestGames;
