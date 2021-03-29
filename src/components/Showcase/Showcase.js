import React ,{useEffect} from "react";
import classes from "./Showcase.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {withRouter} from "react-router-dom"

const Showcase=(props)=> {
  let containerStyle = classes.Container;
  if (props.background) {
    containerStyle = classes.Container + " " + classes.default;
    console.log(containerStyle);
  }

   const navigateToSignInHandler = () => {
    props.history.push("/sign-in");
  };

  const { inView, ref } = useInView();
  const controls = useAnimation();
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

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <motion.section className={containerStyle}>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={variants}
      >
        <h1 className={classes.Title}>
          {props.title}
          {props.highlight && (
            <span className={classes.TitleStand}>{props.highlight}</span>
          )}
        </h1>
        {props.content && <p className={classes.Content}>{props.content}</p>}
        {props.children}
        {props.button && (
          <button onClick={navigateToSignInHandler} className={classes.button}>{props.button}</button>
        )}
      </motion.div>
    </motion.section>
  );
}


export default withRouter(Showcase)