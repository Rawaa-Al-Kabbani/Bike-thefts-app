import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import ListOfThefts from "./components/ListOfThefts";
import TheftDetails from "./components/TheftDetails";
import SearchBar from "./components/SearchBar";
import LinearProgress from "@material-ui/core/LinearProgress";

function App(props) {
  const [allThefts, setAllThefts] = useState([]);
  const [selectedThefts, setSelectedThefts] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const fetchThefts = async () => {
    const parameters = {
      incident_type: "theft",
      proximity: "55.607405,12.998945",
      proximity_square: 8,
    };
    await fetch(
      "https://bikewise.org:443/api/v2/incidents?" +
        new URLSearchParams(parameters)
    )
      .then((response) => response.json())
      .then((data) => {
        const thefts = data.incidents;
        setAllThefts(thefts);
        setSelectedThefts(thefts);
        setIsLoaded(true);
      });
  };

  const getLoadingState = () => {
    if (!isLoaded) {
      return <LinearProgress />;
    }
  };

  const doSearch = (query) => {
    if (!query) {
      setSelectedThefts(allThefts);
      return;
    }
    query = query.toLowerCase();
    const filteredThefts = allThefts.filter(
      (theft) =>
        theft.address.toLowerCase().includes(query) ||
        theft.title.toLowerCase().includes(query)
    );
    setSelectedThefts(filteredThefts);
  };

  useEffect(() => {
    const fetchData = async () => {
      await fetchThefts();
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      {getLoadingState()}
      <Router>
        <Switch>
          <Route exact path="/">
            <SearchBar onChange={doSearch} />
            <ListOfThefts thefts={selectedThefts} />
          </Route>
          <Route exact path="/theftDetails">
            <TheftDetails />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
