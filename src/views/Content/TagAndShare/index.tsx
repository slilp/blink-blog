import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { Grid, Box, Chip, Typography } from "@material-ui/core";
import { FaFacebook } from "react-icons/fa";

const useStyles = makeStyles((theme: Theme) => ({
  tags: {
    display: "flex",
    flexWrap: "wrap",
    listStyle: "none",
    padding: theme.spacing(0.5),
    margin: 0,
    marginTop: "0.5rem",
  },
  chip: {
    cursor: "pointer",
    margin: theme.spacing(0.5),
  },
  icon: {
    cursor: "pointer",
    "&:hover": {
      color: "#3B5998",
    },
  },
}));

interface ChipData {
  key: number;
  label: string;
}

function TagAndShare() {
  const classes = useStyles();
  const [chipData, setChipData] = React.useState<ChipData[]>([
    { key: 0, label: "Angular" },
    { key: 1, label: "jQuery" },
    { key: 2, label: "Polymer" },
    { key: 3, label: "React" },
    { key: 4, label: "Vue.js" },
  ]);

  return (
    <Grid container>
      <Grid item md={4} sm={6}>
        <Box fontWeight="fontWeightBold" fontSize="16">
          Tag
        </Box>
        <Box className={classes.tags}>
          {chipData.map((data) => {
            return (
              <li key={data.key}>
                <Chip clickable label={data.label} className={classes.chip} />
              </li>
            );
          })}
        </Box>
      </Grid>
      <Grid item md={4} sm={6}>
        <Box fontWeight="fontWeightBold" fontSize="16">
          Share
        </Box>
        <Box className={classes.tags}>
          <Typography className={classes.icon} variant="h4">
            <FaFacebook></FaFacebook>
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}

export default TagAndShare;
