import React from "react";
import Advertisement from "./container_sub_components/Advertisement";
import BrowseManual from "./container_sub_components/BrowseManual";
import DynamicPlaceholder from "./container_sub_components/DynamicPlaceholder";
import Filmstrip from "./container_sub_components/Filmstrip";
import StoryBlock from "./container_sub_components/StoryBlock";
import SuperHero from "./container_sub_components/SuperHero";

function MainContainer() {
  return (
    <div>
      <Advertisement />
      <BrowseManual />
      <DynamicPlaceholder />
      <Filmstrip />
      <StoryBlock />
      <SuperHero />
    </div>
  );
}

export default MainContainer;
