import React from "react";
import WhatshotIcon from "@material-ui/icons/Whatshot";

function Sidebar() {
  return (
    <div className="sidebar__container">
      <div className="sidebar__content">
        <div classNameName="underline"></div>
        <h1 className="sidebar__title">Trending</h1>

        <div className="sidebar__news">
          <div className="sidebar__item">
            <p>
              <span className="coloring">
                <WhatshotIcon className="icon-trending" height="20" />
                Increase Revnue:
              </span>
              &nbsp;Join us and increase your revnue&nbsp;
            </p>
            <p className="sidebar__shares">5.4k VISITED</p>
          </div>
          <div className="sidebar__item">
            <p>
              <span className="coloring">
                <WhatshotIcon className="icon-trending" height="20" />
                Easy set ups:
              </span>
              &nbsp;Build your own store in a few moments&nbsp;
            </p>
            <p className="sidebar__shares">3.7k VISITED</p>
          </div>
          <div className="sidebar__item">
            <p>
              <span className="coloring">
                <WhatshotIcon className="icon-trending" height="20" />
                Full Refund:
              </span>
              &nbsp;Our clients will be fully refunded of they choose to&nbsp;
            </p>
            <p className="sidebar__shares">2.1k VISITED</p>
          </div>
          <div className="sidebar__item">
            <p>
              <span className="coloring">
                <WhatshotIcon className="icon-trending" height="20" />
                Free Adds:
              </span>
              &nbsp;We provide free adds for you to increase your profits&nbsp;
            </p>
            <p className="sidebar__shares">1.8k VISITED</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
