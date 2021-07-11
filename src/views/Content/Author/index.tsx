import React from "react";
import {
  styled,
  makeStyles,
  createStyles,
  Theme,
} from "@material-ui/core/styles";
import { Grid, Box, Avatar } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
  })
);

const AuthorCard = styled(Grid)({
  borderLeft: "5px solid #1167b1",
  padding: "1rem",
  margin: "0.1rem",
  display: "flex",
  justifyItems: "center",
});

function Auther() {
  const classes = useStyles();

  return (
    <AuthorCard container spacing={5}>
      <Grid item>
        <Avatar
          className={classes.large}
          src="https://secure.gravatar.com/avatar/fd0dc5e64199e7ffc10b1eb1ce570b54?s=32&d=mm&r=g"
        />
      </Grid>
      <Grid item>
        <Box my={1}>Slil Puangpoom (Blink)</Box>
        <Box fontWeight="fontWeightLight">I am Software engineer.</Box>
      </Grid>
    </AuthorCard>
  );
}

export default Auther;
