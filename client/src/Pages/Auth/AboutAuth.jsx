import React from "react";
import { useTranslation } from "react-i18next";
const AboutAuth = () => {
  const {t} = useTranslation();
  const {zero, one, two, three, four, five, six} = t('about');
  return (
    <div className="auth-container-1">
      <h1>{zero}</h1>
      <p>{one}</p>
      <p>{two}</p>
      <p>{three}</p>
      <p>{four}</p>
      <p style={{ fontSize: "13px", color: "#666767" }}>
        {five}
      </p>
      <p style={{ fontSize: "13px", color: "#007ac6" }}>
        {six}
      </p>
    </div>
  );
};

export default AboutAuth;
