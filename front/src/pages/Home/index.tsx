import React from "react";
import InfoSection from "@components/InfoSection";
import {
  homeObjfirst,
  homeObjSecond,
  homeObjThird,
  homeObjFourth,
} from "../../data";
function Home() {
  return (
    <>
      <InfoSection {...homeObjfirst} />
      <InfoSection {...homeObjSecond} />
      <InfoSection {...homeObjThird} />
      <InfoSection {...homeObjFourth} />
    </>
  );
}

export default Home;
