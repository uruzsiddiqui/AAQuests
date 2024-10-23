import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import decode from "jwt-decode";
import A2 from "../../assets/A2.png";
// import logo from "../../assets/logo.png";
import search from "../../assets/search-solid.svg";
import Avatar from "../../components/Avatar/Avatar";
import "./Navbar.css";
import { setCurrentUser } from "../../actions/currentUser";
import bars from "../../assets/bars-solid.svg";
import { useTranslation } from "react-i18next";
import { HiCube } from "react-icons/hi";

const Navbar = ({ handleSlideIn }) => {
  const dispatch = useDispatch();
  var User = useSelector((state) => state.currentUserReducer);
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { one, two, three, four, five } = t('greetings');
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
    dispatch(setCurrentUser(null));
  };

  useEffect(() => {
    const token = User?.token;
    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) {
        handleLogout();
      }
    }
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));
  }, [User?.token, dispatch]);

  return (
    <nav className="main-nav">
      <div className="navbar">
        <button className="slide-in-icon" onClick={() => handleSlideIn()}>
          <img src={bars} alt="bars" width="15" />
        </button>
        <div className="navbar-1">
        <div className="navbar-1">
          <Link to="/" className="nav-item nav-logo A3">
            <img src={A2} alt="logo" style={{ height: "2rem", width: "11rem", marginTop: "-0.5rem" }} />
          </Link>
        </div>
        <Link to="/" className="nav-item nav-btn res-nav A2">
          {one}
        </Link>
        <Link to="/" className="nav-item nav-btn res-nav A2">
          {two}
        </Link>
        <Link to="/" className="nav-item nav-btn res-nav A2">
          {three}
        </Link>
          <form>
            <input type="text" placeholder="Search..." />
            <img src={search} alt="search" width="18" className="search-icon" />
          </form>
          <Link to="/language" className="nav-item nav-btn res-nav" style={{ height: "auto", width: "auto" }}>
          <HiCube />
        </Link>
        </div>
        <div className="navbar-2" style={{ margin: "0px 0px" }}>
          {User?.result ? (
            <>
              <Avatar
                backgroundColor="#009dff"
                px="10px"
                py="7px"
                borderRadius="50%"
                color="white"
              >
                <Link
                  to={`/Users/${User.result._id}`}
                  style={{ color: "white", textDecoration: "none" }}
                >
                  {User.result.name.charAt(0).toUpperCase()}
                </Link>
              </Avatar>
              <button className="nav-item nav-links" onClick={handleLogout}>
                {five}
              </button>
            </>
          ) : (
            <Link to="/Auth" className="nav-item nav-links">
              {four}
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
