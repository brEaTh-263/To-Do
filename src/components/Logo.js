import React from "react";
import classes from "./Logo.css";
import logo from "../assets/logo.png";

export default function Logo() {
  return (
    <div className={classes.LogoContainer}>
      <img src={logo} alt="logo for the website" />
      <h3>To-Do</h3>
    </div>
  );
}
