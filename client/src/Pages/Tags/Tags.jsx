import React from "react";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import TagsList from "./TagsList";
import "./Tags.css";
import { tagsList } from "./tagList";
import { useTranslation } from "react-i18next";
const Tags = ({ slideIn, handleSlideIn }) => {
  const {t} = useTranslation();
  const {zero, one} = t('tagss');
  return (
    <div className="home-container-1">
      <LeftSidebar slideIn={slideIn} handleSlideIn={handleSlideIn} />
      <div className="home-container-2">
        <h1 className="tags-h1">{zero}</h1>
        <p className="tags-p">
        {one}
        </p>
        <div className="tags-list-container">
          {tagsList.map((tag, index) => (
            <TagsList tag={tag} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tags;
