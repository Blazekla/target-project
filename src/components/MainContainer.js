import React from "react";
import SuperHero from "./container_sub_components/SuperHero";
import Filmstrip from "./container_sub_components/Filmstrip";
import StoryBlock from "./container_sub_components/StoryBlock";
import DynamicPlaceholder from "./container_sub_components/DynamicPlaceholder";
import BrowseManual from "./container_sub_components/BrowseManual";
import Advertisement from "./container_sub_components/Advertisement";

function MainContainer() {
  return (
    <div style={{ color: "rgb(51,51,51)" }}>
      <SuperHero />
      <Filmstrip />
      <StoryBlock />
      <DynamicPlaceholder />
      <BrowseManual />
      <Advertisement />
    </div>
  );
}

export default MainContainer;
