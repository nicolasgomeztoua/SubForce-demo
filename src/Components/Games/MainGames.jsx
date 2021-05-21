import React, { useState, useEffect } from "react";
import styled from "styled-components";
import mainGames from "../../Data/MainGames";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore, { Pagination, Navigation } from "swiper/core";
SwiperCore.use([Pagination, Navigation]);

const Header = styled.h2`
  font-size: 1rem;
  color: #2d6e9c;
  padding: 1rem 6rem;
`;
const SEO = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  row-gap: 10px;

  @media screen and (max-width: 790px) {
    grid-template-columns: 1fr;
    justify-content: center;
    margin: 0 50%;
  }
`;
const Block = styled.article`
  display: grid;
  grid-template-columns: 120px 1fr;
  grid-template-rows: 1fr;
  margin: 0 15%;
  margin-bottom: 10%;
`;
const Text = styled.div`
  grid-template-rows: 1fr 1fr;
  margin: 0 5px;
`;
const Img = styled.div`
  background: #9999;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 120px;
  @media screen and (max-width: 780px) {
    height: 163px;
  }
`;
const Title = styled.h3`
  font-size: 1rem;
  color: #2d6e9c;
`;
const Paragraph = styled.p`
  font-size: 0.8rem;
  width: 200px;
  @media screen and (max-width: 780px) {
    width: 125px;
    margin-right: 20px;
  }
`;
const MainGames = () => {
  const [firstPageItems, setFirstPageItems] = useState(10);
  const [secondPageItems, setSecondPageItems] = useState(0);
  const [windowWidth, setWindowInnerWidth] = useState(window.innerWidth);
  const reportWindowSize = () => {
    setWindowInnerWidth(window.innerWidth);
  };
  window.addEventListener("resize", reportWindowSize);
  useEffect(() => {
    windowWidth < 790 ? setFirstPageItems(5) : setFirstPageItems(10);
    windowWidth < 790 ? setSecondPageItems(10) : setSecondPageItems(0);
  }, [windowWidth]);
  return (
    <>
      <Header>Main games</Header>
      <Swiper
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        className="mySwiper"
      >
        <SwiperSlide style={{ width: "100%" }}>
          {" "}
          <SEO>
            {mainGames.slice(0, firstPageItems).map((game, index) => {
              return (
                <Block>
                  <Img>{game.image}</Img>
                  <Text>
                    <Title>{game.title}</Title>
                    <Paragraph>{game.desc}</Paragraph>
                  </Text>
                </Block>
              );
            })}
          </SEO>
        </SwiperSlide>
        <SwiperSlide style={{ width: "100%" }}>
          {" "}
          <SEO>
            {mainGames
              .slice(firstPageItems, secondPageItems)
              .map((game, index) => {
                return (
                  <Block>
                    <Img>{game.image}</Img>
                    <Text>
                      <Title>{game.title}</Title>
                      <Paragraph>{game.desc}</Paragraph>
                    </Text>
                  </Block>
                );
              })}
          </SEO>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default MainGames;
