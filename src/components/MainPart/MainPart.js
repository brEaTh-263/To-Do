import React from "react";
import classes from "./MainPart.css";
import Logo from "../Logo";
import { withRouter } from "react-router";
import { motion } from "framer-motion";

const MainPart = (props) => {
  const navigateToSignInHandler = () => {
    props.history.push("/sign-in");
  };

  const variants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
      },
    },
  };


  return (
    <motion.div className={classes.MainPart}>
      <Logo />
      <motion.div initial="hidden" animate="visible" variants={variants}>
        <h1 className={classes.title}>Task Manager for small teams</h1>
        <p>
          Brutask is a simple to-do list for small companies or teams who work
          on daily scrums and have regular stand-ups!
        </p>
        <button onClick={navigateToSignInHandler}>Get started for free!</button>
        <div className={classes.MainVideo}>
          <lottie-player
            src="https://assets8.lottiefiles.com/packages/lf20_5pp8fztp.json"
            mode="normal"
            background="#fff"
            speed="1"
            loop
            autoplay
          ></lottie-player>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default withRouter(MainPart);
