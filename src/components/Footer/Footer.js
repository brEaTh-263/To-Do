import React from "react";
import Logo from "../Logo";
import classes from "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <Logo />
      <div className={classes.footerItemContainer}>
        <p className={classes.footerItemBold}>support@to-do.com</p>
        <p>Privacy Policy</p>
        <p>Terms</p>
      </div>
    </footer>
  );
}
