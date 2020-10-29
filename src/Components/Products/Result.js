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

      <div className="service">
        <div className="header">
          {props.serviceName}
          <div className="underline"></div>
        </div>
        <div className="small-box-1">
          <img className="small__image" src={props.service__img1} alt="" />
        </div>
        <div className="small-box-2">
          <img className="small__image" src={props.service__img2} alt="" />
        </div>
        <div className="small-box-3">
          <img className="small__image" src={props.service__img3} alt="" />
        </div>

        <div className="main-content">
          <div className="underline__middle"></div>
          {props.serviceDescpretion}
          <div className="underline__middle"></div>
        </div>
        <div className="sidebar">
          <Sidebar />
        </div>

        <div className="footer">{props.footer}</div>
      </div>
    </>
  );
};

export default Result;
