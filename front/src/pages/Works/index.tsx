import React from "react";
import InfoSection from "@components/InfoSection";
import { homeObjThird, homeObjFourth } from "./Data";
import Pricing from "@components/Pricing";
function Works() {
  return (
    <>
      <InfoSection {...homeObjThird} />
      <Pricing />
      <InfoSection {...homeObjFourth} />
    </>
  );
}

export default Works;
