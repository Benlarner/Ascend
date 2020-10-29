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
            serviceName={result.serviceName}
            serviceDescpretion={result.serviceDescpretion}
            service__img1={result.service__img1}
            service__img2={result.service__img2}
            service__img3={result.service__img3}
            footer={result.footer}
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
