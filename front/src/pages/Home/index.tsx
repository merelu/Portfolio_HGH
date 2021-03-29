import React from "react";
import InfoSection from "@components/InfoSection";
import {
  homeObjfirst,
  homeObjSecond,
  homeObjThird,
  homeObjFourth,
} from "../../data";
import Pricing from "@components/Pricing";
function Home() {
  return (
    <>
      <InfoSection {...homeObjfirst} />
      <InfoSection {...homeObjSecond} />
      <InfoSection {...homeObjThird} />
      <Pricing />
      <InfoSection {...homeObjFourth} />
    </>
  );
}

export default Home;
