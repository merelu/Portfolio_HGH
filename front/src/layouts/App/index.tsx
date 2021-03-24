import About from "@pages/About";
import Contact from "@pages/Contact";
import Home from "@pages/Home";
import Services from "@pages/Services";
import Works from "@pages/Works";
import React from "react";
import { Route, Switch } from "react-router";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/services" component={Services} />
      <Route path="/works" component={Works} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
    </Switch>
  );
}

export default App;
