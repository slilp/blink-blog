import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  Grid,
  Typography,
  CardMedia,
  CardContent,
  Box,
  Hidden,
} from "@material-ui/core";
import Search from "./components/Search";
import HeadContent from "./components/HeadContent";

const useStyles = makeStyles((theme) => ({
  root: {},
  headGrid: {
    padding: "1rem",
  },
  titleText: {
    color: "blue",
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    cursor: "pointer",
    transition: "0.25s",
    "&:hover": {
      transform: "translateY(-5px)",
      boxShadow: "0 2px 30px 0 #ced3d6",
      transition: "0.25s",
    },
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {},
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        alignItems="center"
        className={classes.headGrid}
        spacing={3}
      >
        <Grid item xs={12} md={6}>
          <Typography variant="h4">
            Welcome to
            <span className={classes.titleText}> BLINK BLOG !</span>
          </Typography>
          <Box fontWeight="fontWeightLight" fontSize="h6.fontSize">
            React / Node.js / Dotnet / Java
          </Box>
        </Grid>
        {/* <Hidden mdDown>
          <Grid item md={3}></Grid>
        </Hidden> */}
        <Grid item xs={12} md={3}>
          <Search></Search>
        </Grid>
      </Grid>
      <HeadContent></HeadContent>

      <div>
        <Grid container spacing={8}>
          {cards.map((card) => (
            <Grid item key={card} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image="https://source.unsplash.com/random"
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Box
                    fontWeight="fontWeightMedium"
                    fontSize="h5.fontSize"
                    my={2}
                  >
                    UX designer jobs: where and how to find them
                  </Box>
                  {/* <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                  ></Typography> */}
                  <Typography>
                    This is a media card. You can use this section to describe
                    the content.This is a media card. You can use this section
                    to describe the content.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}

export default Home;
