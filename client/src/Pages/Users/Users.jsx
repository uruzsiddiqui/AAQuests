import React from "react";
import { useTranslation } from "react-i18next";
import "./Users.css";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import UsersList from "./UsersList";

const Users = ({ slideIn, handleSlideIn }) => {
  const {t} = useTranslation();
  const {two} = t('tagss');
  return (
    <div className="home-container-1">
      <LeftSidebar slideIn={slideIn} handleSlideIn={handleSlideIn} />
      <div className="home-container-2" style={{ marginTop: "30px" }}>
        <h1 style={{ fontWeight: "400" }}>{two}</h1>
        <UsersList />
      </div>
    </div>
  );
};

export default Users;
