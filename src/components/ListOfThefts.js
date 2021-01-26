import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Divider,
  Typography,
} from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import { getDateFromTimestamp } from "../utils";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "50%",
    backgroundColor: theme.palette.background.paper,
    margin: "auto",
  },
  listItemField: {
    display: "block",
    marginBottom: "0.5em",
  },
}));

function ListOfThefts(props) {
  const classes = useStyles();

  const theftDetails = (theft) => {
    props.history.push({
      pathname: "/theftDetails",
      state: { theft: theft },
    });
  };

  const thefts = props.thefts.map((theft) => {
    return (
      <Fragment key={theft.id}>
        <ListItem
          alignItems="flex-start"
          button
          onClick={() => {
            theftDetails(theft);
          }}
        >
          <ListItemAvatar>
            <Avatar alt="picture of bike" src={theft.media.image_url_thumb} />
          </ListItemAvatar>
          <ListItemText
            primary={theft.title}
            secondary={
              <Fragment>
                <Typography className={classes.listItemField} component="span">
                  {theft.description}
                </Typography>
                <Typography className={classes.listItemField} component="span">
                  Occurred: {getDateFromTimestamp(theft.occurred_at)}
                </Typography>
                <Typography className={classes.listItemField} component="span">
                  Reported: {getDateFromTimestamp(theft.updated_at)}
                </Typography>
                <Typography className={classes.listItemField} component="span">
                  Location: {theft.address}
                </Typography>
              </Fragment>
            }
          ></ListItemText>
        </ListItem>
        <Divider variant="inset" component="li" />
      </Fragment>
    );
  });
  return <List className={classes.root}>{thefts}</List>;
}

export default withRouter(ListOfThefts);
