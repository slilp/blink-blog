import React from "react";
import { Container, Divider } from "@material-ui/core";
import Header from "./Header";
import Markdown from "./Markdown";
import Author from "./Author";
import TagAndShare from "./TagAndShare";

function Content() {
  return (
    <Container maxWidth="md">
      <br></br>
      <Header></Header>
      {/* <Markdown></Markdown> */}
      <br></br>
      <Divider></Divider>
      <br></br>
      <TagAndShare></TagAndShare>
      <br></br>
      <Author></Author>
    </Container>
  );
}

export default Content;
