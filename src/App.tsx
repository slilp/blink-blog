import React from "react";
import { Switch, Route } from "react-router-dom";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import {
  Navbar,
  Footer,
  SuspenseWithChunkError,
  PageLoader,
} from "./components";
import { Home, Content, Topic } from "./views";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#f4f6f6",
    minHeight: "85vh",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Navbar></Navbar>
      <Container>
        <br />
        <br />
        <br />
        <br />
        <br />
        <Switch>
          <SuspenseWithChunkError fallback={<PageLoader></PageLoader>}>
            <Switch>
              <Route path="/content" component={Content}></Route>
              <Route path="/topic" component={Topic}></Route>
              <Route path="/" component={Home}></Route>
            </Switch>
          </SuspenseWithChunkError>
        </Switch>
      </Container>
      <Footer></Footer>
    </div>
  );
}

export default App;
