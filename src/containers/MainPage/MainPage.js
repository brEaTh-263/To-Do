import React from "react";
import classes from "./MainPage.css";
import Header from "../../components/Header/Header";
import MainPart from "../../components/MainPart/MainPart";
import Showcase from "../../components/Showcase/Showcase";
import FeaturesList from "../../components/FeaturesList/FeaturesList";
import Footer from "../../components/Footer/Footer";

export default function MainPage(props) {
  //   console.log(props);
  return (
    <div className={classes.container}>
      <Header />
      <main>
        <MainPart />

        <Showcase
          title="To-Do isn't a tool,it's a "
          highlight="Habit"
          content="The experience is pretty much like writing your daily tasks on a
            sticky note. Organising your daily tasks can improve your
            productivity & lead to enhanced work quality."
          button="Check out our blog now!"
          background={true}
        ></Showcase>
        <Showcase
          title="To-Do is not "
          highlight="Trello"
          content="If you’re looking for features like assigning roles, adding
            deadlines, attachments, etc. then please check out Trello, Notion,
            or something else. To-Do is efficient in its simplicity — daily
            tasks & supervision."
          button="Get Started for free"
          background={false}
        >
          <FeaturesList />
        </Showcase>
        <Showcase
          title="Add members,assign managers, and supervise your team"
          background={true}
        ></Showcase>
      </main>
      <Footer />
    </div>
  );
}
