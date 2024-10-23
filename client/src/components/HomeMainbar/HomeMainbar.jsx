import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./HomeMainbar.css";
import QuestionList from "./QuestionList";
import { useTranslation } from "react-i18next";

const HomeMainbar = () => {
  const location = useLocation();
  const user = 1;
  const navigate = useNavigate();

  const {t} = useTranslation();
  const {zero, one, two, three, four} = t('homebar');
  const questionsList = useSelector((state) => state.questionsReducer);

  const checkAuth = () => {
    if (user === null) {
      alert("login or signup to ask a question");
      navigate("/Auth");
    } else {
      navigate("/AskQuestion");
    }
  };

  return (
    <div className="main-bar">
      <div className="main-bar-header">
        {location.pathname === "/" ? (
          <h1>{one}</h1>
        ) : (
          <h1>{zero}</h1>
        )}
        <button onClick={checkAuth} className="ask-btn">
         {two}
        </button>
      </div>
      <div>
        {questionsList.data === null ? (
          <h1>{four}...</h1>
        ) : (
          <>
            <p>{questionsList.data.length} {three}</p>
            <QuestionList questionsList={questionsList.data} />
          </>
        )}
      </div>
    </div>
  );
};

export default HomeMainbar;
