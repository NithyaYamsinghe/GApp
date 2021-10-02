import React from "react";
import { Grid, Avatar } from "@mui/material";
import { AcUnitTwoTone } from "@mui/icons-material";
import { DeleteOutline } from "@mui/icons-material";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";

export default function GDrive() {
  return (
    <Grid container spacing={3} rowSpacing={3}>
      <Grid item xs={1}>
        <Avatar>
          <AcUnitTwoTone />
        </Avatar>
        <DeleteOutline />
        Name: Yohan Srimal Ranasinghe
      </Grid>
      <Grid item xs={1}>
        1
      </Grid>
      <Grid item xs={1}>
        1
      </Grid>
      <Grid item xs={1}>
        1
      </Grid>
      <Grid item xs={1}>
        1
      </Grid>
      <Grid item xs={1}>
        1
      </Grid>
      <Grid item xs={1}>
        1
      </Grid>
      <Grid item xs={1}>
        1
      </Grid>
      <Grid item xs={1}>
        1
      </Grid>
    </Grid>
  );
}
