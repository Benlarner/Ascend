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
              &nbsp;the complete package for your online store&nbsp;
            </p>
            <p className="sidebar__shares">5.4k VISITED</p>
          </div>
          <div className="sidebar__item">
            <p>
              <span className="coloring">
                <WhatshotIcon className="icon-trending" height="20" />
                Increase Revnue:
              </span>
              &nbsp;the complete package for your online store&nbsp;
            </p>
            <p className="sidebar__shares">5.4k VISITED</p>
          </div>
          <div className="sidebar__item">
            <p>
              <span className="coloring">
                <WhatshotIcon className="icon-trending" height="20" />
                Increase Revnue:
              </span>
              &nbsp;the complete package for your online store&nbsp;
            </p>
            <p className="sidebar__shares">5.4k VISITED</p>
          </div>
          <div className="sidebar__item">
            <p>
              <span className="coloring">
                <WhatshotIcon className="icon-trending" height="20" />
                Increase Revnue:
              </span>
              &nbsp;the complete package for your online store&nbsp;
            </p>
            <p className="sidebar__shares">5.4k VISITED</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
