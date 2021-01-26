import React from "react";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    margin: "auto",
    [theme.breakpoints.up("sm")]: {
      width: "50%",
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  searchInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: 300,
      "&:focus": {
        width: 300,
      },
    },
  },
}));

function SearchBar(props) {
  const onChange = (event) => {
    const query = event.target.value;
    props.onChange(query);
  };
  const classes = useStyles();
  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        type="text"
        name="query"
        placeholder="Search by title or address"
        onChange={onChange}
        classes={{
          input: classes.searchInput,
        }}
      />
    </div>
  );
}

export default SearchBar;
