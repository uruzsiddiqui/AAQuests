import React from "react";
import { useTranslation } from "react-i18next";
const WidgetTags = () => {
  const tags = [
    "c",
    "css",
    "express",
    "firebase",
    "html",
    "java",
    "javascript",
    "mern",
    "mongodb",
    "mysql",
    "next.js",
    "node.js",
    "php",
    "python",
    "reactjs",
  ];
  const {t} = useTranslation();
  const {three} = t('rightbar');
  return (
    <div className="widget-tags">
      <h4>{three}</h4>
      <div className="widget-tags-div">
        {tags.map((tag) => (
          <p key={tag}>{tag}</p>
        ))}
      </div>
    </div>
  );
};

export default WidgetTags;
