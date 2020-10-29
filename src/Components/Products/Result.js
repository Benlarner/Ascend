import React from "react";
import { Link } from "react-router-dom";
import Sidebard from "./Sidebar";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import Sidebar from "./Sidebar";
export const Result = (props) => {
  return (
    <>
      <div>
        <Link className="back" to="/Results">
          <ChevronLeftIcon />
        </Link>
      </div>

      <div class="service">
        <div class="header">
          {props.serviceName}
          <div className="underline"></div>
        </div>
        <div class="small-box-1">
          <img src={props.service__img1} alt="" />
        </div>
        <div class="small-box-2">
          <img src={props.service__img2} alt="" />
        </div>
        <div class="small-box-3">
          <img src={props.service__img3} alt="" />
        </div>

        <div class="main-content">
          <div className="underline__middle"></div>
          {props.serviceDescpretion}
          <div className="underline__middle"></div>
        </div>
        <div class="sidebar">
          <Sidebar />
        </div>

        <div class="footer">{props.footer}</div>
      </div>
    </>
  );
};

export default Result;
