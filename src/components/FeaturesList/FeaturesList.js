import React from "react";
import FeatureItem from "../FeaturesItem/FeatureItem";
import classes from "./FeaturesList.css";

export default function FeaturesList() {
  return (
    <div className={classes.featuresListContainer}>
      <FeatureItem
        link="https://assets3.lottiefiles.com/packages/lf20_alyseq4q.json"
        title="Add Tasks"
        content="Add & update your daily tasks, ensuring complete clarity for your managers & supervisors."
      />
      <FeatureItem
        link="https://assets9.lottiefiles.com/private_files/lf30_cLUr6E.json"
        title="Prioritization"
        content="Prioritise the most important tasks of the day to the top so you do what needs to be done first."
      />
      <FeatureItem
        link="https://assets8.lottiefiles.com/packages/lf20_zyilxaor.json"
        title="Time Boxing"
        content="Allocate time for each task for better time management & organization."
      />
    </div>
  );
}
