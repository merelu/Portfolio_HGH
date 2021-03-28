import Footer from "@components/Footer";
import Navbar from "@components/Navbar";
import { css, Global } from "@emotion/react";
import Home from "@pages/Home";
import React from "react";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Global
        styles={css`
          * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            font-family: "Source Sans Pro", sans-serif;
          }
        `}
      />
      <Navbar />
      <Switch>
        <Route path="/" component={Home} exact />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
