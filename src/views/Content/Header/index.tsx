import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Grid, CardMedia } from "@material-ui/core";

const useStyles = makeStyles({
  media: {
    maxWidth: "100%",
    maxHeight: "100%",
  },
});

function Header() {
  const classes = useStyles();

  return (
    <div>
      <Box fontWeight="fontWeightBold" fontSize="h4.fontSize">
        UX design portfolio: examples and websites
      </Box>
      <br></br>
      <Box fontWeight="fontWeightLight" fontSize="15">
        published : 12/07/2021
      </Box>
      <br></br>
      <img
        className={classes.media}
        src="https://miro.medium.com/max/7744/1*cA5znqxp0c1e5OredkqReg.jpeg"
      ></img>
    </div>
  );
}

export default Header;
