import React from "react";
import classes from "./FeatureItem.css";

export default function FeatureItem(props) {
  return (
    <div className={classes.featuresListItem}>
      <div className={classes.featuresListItemVideo}>
        <lottie-player
          src={props.link}
          background="transparent"
          speed="1"
          loop
          autoplay
        ></lottie-player>
      </div>
      <h3 className={classes.featuresListItemTitle}>{props.title}</h3>
      <p className={classes.featuresListItemContent}>{props.content}</p>
    </div>
  );
}
