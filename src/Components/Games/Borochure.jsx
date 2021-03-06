import React from "react";
import MainGames from "./MainGames";
import OurBestGames from "./OurBestGames";
import ShareCodes from "./ShareCodes";

const Borochure = () => {
  return (
    <div style={{ background: "white", height: "100%" }}>
      <OurBestGames></OurBestGames>
      <ShareCodes></ShareCodes>
      <MainGames></MainGames>
    </div>
  );
};

export default Borochure;
