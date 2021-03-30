import React from "react";
import InfoSection from "@components/InfoSection";
import { homeObjSecond, homeObjThird, homeObjFourth } from "./Data";
import Pricing from "@components/Pricing";
function About() {
  return (
    <>
      <InfoSection {...homeObjSecond} />
      <InfoSection {...homeObjThird} />
      <Pricing />
      <InfoSection {...homeObjFourth} />
    </>
  );
}

export default About;
