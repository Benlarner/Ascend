import React from "react";
import { ResultsList } from "../Data/Data";
import { Route } from "react-router-dom";
import Result from "./Result";
import Results from "./Results";
import "./style.css";

const ResultsContainer = (props) => {
  let resultsUrl = ResultsList.map((result) => {
    return (
      <Route
        path={`/Results/${result.url}`}
        render={() => (
          <Result
            
          />
        )}
      />
    );
  });
  return (
    <>
      <Route exact path="/Results" render={() => <Results />} />
      {resultsUrl}
    </>
  );
};

export default ResultsContainer;
