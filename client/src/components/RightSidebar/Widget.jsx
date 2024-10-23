import React from "react";
import "./RightSidebar.css";
import comment from "../../assets/comment-alt-solid.svg";
import pen from "../../assets/pen-solid.svg";
import blackLogo from "../../assets/blacklogo.svg";
import { useTranslation } from "react-i18next";
const Widget = () => {
  const {t} = useTranslation();
  const {zero,one,two,four,five,six,seven,eight,nine,ten,eleven} = t('rightbar');
  return (
    <div className="widget">
      <h4>{zero}</h4>
      <div className="right-sidebar-div-1">
        <div className="right-sidebar-div-2">
          <img src={pen} alt="pen" width="18" />
          <p>
          {four}
          </p>
        </div>
        <div className="right-sidebar-div-2">
          <img src={pen} alt="pen" width="18" />
          <p>{five}?</p>
        </div>
      </div>
      <h4>{one}</h4>
      <div className="right-sidebar-div-1">
        <div className="right-sidebar-div-2">
          <img src={comment} alt="pen" width="18" />
          <p>{six}....</p>
        </div>
        <div className="right-sidebar-div-2">
          <img src={comment} alt="pen" width="18" />
          <p>
          {seven}
          </p>
        </div>
        <div className="right-sidebar-div-2">
          <img src={blackLogo} alt="pen" width="18" />
          <p>
          {eight}
          </p>
        </div>
      </div>
      <h4>{two}</h4>
      <div className="right-sidebar-div-1">
        <div className="right-sidebar-div-2">
          <p>38</p>
          <p>
          {nine}
          </p>
        </div>
        <div className="right-sidebar-div-2">
          <p>20</p>
          <p>
          {ten}...
          </p>
        </div>
        <div className="right-sidebar-div-2">
          <p>14</p>
          <p>{eleven}?</p>
        </div>
      </div>
    </div>
  );
};

export default Widget;
