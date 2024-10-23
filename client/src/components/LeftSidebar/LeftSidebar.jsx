import React from "react";
import "./LeftSidebar.css";
import { NavLink } from "react-router-dom";
import Globe from "../../assets/Globe.svg";
import { useTranslation } from "react-i18next";

const LeftSidebar = ({ slideIn, handleSlideIn }) => {
  const slideInStyle = {
    transform: "translateX(0%)",
  };

  const slideOutStyle = {
    transform: "translateX(-100%)",
  };

  const {t} = useTranslation();
  const {one, two, three, four, five} = t('leftside');

  return (
    <div
      className="left-sidebar"
      style={slideIn ? slideInStyle : slideOutStyle}
    >
      <nav className="side-nav">
        <button onClick={() => handleSlideIn()} className="nav-btn1">
          <NavLink to="/" className="side-nav-links" activeclassname="active">
            <p>{one}</p>
          </NavLink>
        </button>
        <div className="side-nav-div">
          <div>
            <p>{two}</p>
          </div>
          <button onClick={() => handleSlideIn()} className="nav-btn1">
            <NavLink
              to="/Questions"
              className="side-nav-links"
              activeclassname="active"
            >
              <img style={{paddingTop: "20px"}} src={Globe} alt="Globe" />
              <p style={{ paddingLeft: "10px", paddingTop: "20px" }}> {three} </p>
            </NavLink>
          </button>
          <button onClick={() => handleSlideIn()} className="nav-btn1">
            <NavLink
              to="/Tags"
              className="side-nav-links"
              activeclassname="active"
              style={{ paddingLeft: "40px", paddingTop: "10px" }}
            >
              <p>{four}</p>
            </NavLink>
          </button>
          <button onClick={() => handleSlideIn()} className="nav-btn1">
            <NavLink
              to="/Users"
              className="side-nav-links"
              activeclassname="active"
              style={{ paddingLeft: "40px" , paddingTop: "10px"}}
            >
              <p>{five}</p>
            </NavLink>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default LeftSidebar;
