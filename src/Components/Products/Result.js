import React from "react";
import { Link } from "react-router-dom";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

export const Result = (props) => {
 
  return (
    <>
      <div>
        <Link className="back" to="/Results">
          <ChevronLeftIcon />
        </Link>
      </div>

      <div class="challenge">
        <div class="header">Name of Service</div>
        <div class="small-box-1">IMG 1</div>
        <div class="small-box-2">IMG 2</div>
        <div class="small-box-3">IMG 3</div>
        <div class="main-content">Explanation of the Service</div>
        <div class="sidebar">Trending Component</div>
        <div class="footer">Other Info related</div>
      </div>
      
    </>
  );
};

export default Result;
