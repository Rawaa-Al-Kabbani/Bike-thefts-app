import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@material-ui/core";
import { getDateFromTimestamp } from "../utils";

const useStyles = makeStyles({
  root: {
    margin: "auto",
    maxWidth: "70%",
    maxHeight: "100%",
  },
  content: {
    marginBottom: "1em",
  },
  image: {
    height: "50%",
    maxHeight: 500,
    width: "100%",
  },
});

function TheftDetails(props) {
  const theft = props.history.location.state.theft;
  const classes = useStyles();
  const getImage = (theft) => {
    if (theft.media.image_url) {
      return (
        <img alt="bike" src={theft.media.image_url} className={classes.image} />
      );
    }
  };
  const getDescription = (theft) => {
    if (theft.description) {
      return (
        <Fragment>
          <Typography gutterBottom variant="h5" component="h2">
            Description:
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={classes.content}
          >
            {theft.description}
          </Typography>
        </Fragment>
      );
    }
  };
  return (
    <Card className={classes.root}>
      <CardActionArea>
        {getImage(theft)}
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Title:
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={classes.content}
          >
            {theft.title}
          </Typography>
          {getDescription(theft)}
          <Typography gutterBottom variant="h5" component="h2">
            Occurred:
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={classes.content}
          >
            {getDateFromTimestamp(theft.occurred_at)}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            Reported:
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={classes.content}
          >
            {getDateFromTimestamp(theft.updated_at)}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            Location:
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {theft.address}
          </Typography>
        </CardContent>
      </CardActionArea>
      <br />
    </Card>
  );
}

export default withRouter(TheftDetails);
