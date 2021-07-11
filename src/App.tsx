import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import {
  Navbar,
  Footer,
  SuspenseWithChunkError,
  PageLoader,
} from "./components";
import { Home, Content, Topic } from "./views";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Switch>
        <SuspenseWithChunkError fallback={<PageLoader></PageLoader>}>
          <Switch>
            <Route path="/content" component={Content}></Route>
            <Route path="/topic" component={Topic}></Route>
            <Route path="/" component={Home}></Route>
          </Switch>
        </SuspenseWithChunkError>
      </Switch>
      <Footer></Footer>
    </div>
  );
}

export default App;
