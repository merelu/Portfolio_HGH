import Footer from "@components/Footer";
import Navbar from "@components/Navbar";
import { css, Global } from "@emotion/react";
import About from "@pages/About";
import Home from "@pages/Home";
import Works from "@pages/Works";
import Experience from "@pages/Experience";
import React from "react";
import { Route, Switch } from "react-router-dom";
import ScrollToTop from "@components/ScrollToTop";

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
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        <Route path="/works" component={Works} />
        <Route path="/experience" component={Experience} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
