import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { DiJavascript } from "react-icons/di";

const useStyles = makeStyles((theme) => ({
  root: {},
  bar: {
    backgroundColor: "white",
    justifyContent: "center",
    borderBottom: "0px",
  },
  title: {
    color: "black",
    paddingLeft: "0.25rem",
    paddingRight: "0.25rem",
    fontWeight: "bold",
    fontFamily: "Rubik",
  },
  logo: {
    color: "#FFD300",
    display: "flex",
    alignItems: "center",
    paddingLeft: "0.25rem",
    paddingRight: "0.25rem",
  },
}));

function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" elevation={1}>
        <Toolbar className={classes.bar}>
          <Typography variant="h4" className={classes.logo}>
            <DiJavascript></DiJavascript>
          </Typography>
          <Typography variant="h5" className={classes.title}>
            BLINK ME BLOG
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;
