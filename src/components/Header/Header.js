import React from "react";
import classes from "./Header.css";
import { withRouter } from "react-router-dom";

const Header = (props) => {
  const navigateToSignInHandler = () => {
    props.history.push("/sign-in");
  };
  return (
    <header className={classes.MainHeader}>
      <div className={classes.NavBar}></div>
      <button onClick={navigateToSignInHandler}>Login</button>
    </header>
  );
};

export default withRouter(Header);
