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
  cover: {
    flex: "1 0 auto",
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  details: {
    display: "flex",
    flexDirection: "column",
    flex: "1 0 auto",
  },
  content: {},
  popular: {
    display: "flex",
    marginTop: "1rem",
    transition: "0.25s",
    cursor: "pointer",
    width: "85%",
    "&:hover": {
      transform: "translateY(-5px)",
      boxShadow: "0 2px 30px 0 #ced3d6",
      transition: "0.25s",
    },
  },
  popularSection: {
    justifyContent: "center",
    alignItems: "flex-end",
    display: "flex",
    flexDirection: "column",
    padding: "0px",
    margin: "0px",
  },
}));

const content = [1, 2, 3, 4];

function HeadContent() {
  const classes = useStyles();
  return (
    <div>
      <br></br>
      <Grid container>
        <Grid item xs={12} sm={6}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.cardMedia}
              image="https://source.unsplash.com/random"
              title="Image title"
            />
            <CardContent className={classes.cardContent}>
              <Box fontWeight="fontWeightMedium" fontSize="h5.fontSize" my={2}>
                UX designer jobs: where and how to find them
              </Box>
              {/* <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                  ></Typography> */}
              <Typography>
                This is a media card. You can use this section to describe the
                content.This is a media card. You can use this section to
                describe the content.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Hidden smDown>
          <Grid item xs={12} sm={6} className={classes.popularSection}>
            {content.map((x) => (
              <Card className={classes.popular}>
                <div className={classes.details}>
                  <CardContent className={classes.content}>
                    <Typography component="h5" variant="h5">
                      Live From Space
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                      Mac Miller
                    </Typography>
                  </CardContent>
                  <div className={classes.controls}></div>
                </div>
                <CardMedia
                  className={classes.cover}
                  image="https://source.unsplash.com/random"
                  title="Image title"
                />
              </Card>
            ))}
          </Grid>
        </Hidden>
      </Grid>
      <br></br>
      <br></br>
    </div>
  );
}

export default HeadContent;
