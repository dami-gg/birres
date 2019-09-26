import React from "react";
import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";

import { SECTIONS } from "../../constants";

const useStyles = makeStyles({
  dashboard: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "stretch",
    padding: 10
  },
  card: {
    width: 300,
    margin: 8,
    flexGrow: 1,
    cursor: "pointer"
  },
  media: {
    backgroundSize: "auto",
    height: 200
  },
  actions: {
    justifyContent: "center"
  }
});

const Dashboard = () => {
  const classes = useStyles();

  return (
    <div className={classes.dashboard}>
      {SECTIONS.map(({ title, url, image }, index) => (
        <Link
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          href={url}
        >
          <Card className={classes.card}>
            <CardContent>
              <CardMedia
                className={classes.media}
                image={image}
                title={title}
              />
            </CardContent>
            <CardActions className={classes.actions}>
              <Typography gutterBottom variant="h6" noWrap>
                {title}
              </Typography>
            </CardActions>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export default Dashboard;
