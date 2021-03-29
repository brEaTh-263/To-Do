import React, { useEffect, useState } from "react";
import classes from "./HomePage.css";
import logo from "../../assets/logo.png";
import { useSelector, useDispatch } from "react-redux";
import { Button, IconButton, TableSortLabel } from "@material-ui/core";
import * as authActions from "../../store/actions/Auth";
import * as taskActions from "../../store/actions/Task";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import AddIcon from "@material-ui/icons/Add";
import SendIcon from "@material-ui/icons/Send";

export default function HomePage(props) {
  const dispatch = useDispatch();
  const profileDetails = useSelector((state) => state.Auth);
  const tasks = useSelector((state) => state.Task);
  console.log(tasks);
  // console.log(profileDetails);
  const [task, setTask] = useState("");

  useEffect(() => {
    if (!profileDetails.isAuth) {
      props.history.replace("sign-in");
    }
  });

  const SignOutButtonHandler = async () => {
    await dispatch(authActions.signOut());
    props.history.replace("sign-in");
  };

  const addTaskHandler = () => {
    dispatch(taskActions.addTask(task));
    setTask("");
  };

  return (
    <div className={classes.container}>
      <div className={classes.LogoContainer}>
        <img src={logo} alt="logo for the website" />
        <h3>To-Do</h3>
      </div>
      <div className={classes.MainContainer}>
        <div className={classes.InfoContainer}>
          <img src={profileDetails.displayPicture} alt="DisplayPicture.png" />
          <div className={classes.NameAndNoOfTaskContainer}>
            <h3>{profileDetails.name}</h3>
            <p>1 task</p>
          </div>
        </div>
        <div className={classes.taskInputContainer}>
          <AddIcon color="primary" />
          <input
            value={task}
            onChange={(e) => {
              setTask(e.target.value);
            }}
            type="text"
            minLength={2}
            onKeyUp={(event) => {
              if (event.key === "Enter") {
                addTaskHandler();
              }
            }}
            placeholder="Add a task"
            className={classes.taskInput}
          />
          <SendIcon
            color="action"
            className={classes.enterButton}
            onClick={addTaskHandler}
          />
        </div>
      </div>
      <Button
        variant="contained"
        size="small"
        className={classes.phoneFooterButton}
        startIcon={<BusinessCenterIcon />}
      >
        Manage
      </Button>
      <div className={classes.phoneFooter}>
        <img
          className={classes.phoneFooterAvatar}
          src={profileDetails.displayPicture}
          alt="DisplayPicture.png"
        />
        <IconButton aria-label="delete" onClick={SignOutButtonHandler}>
          <ExitToAppIcon />
        </IconButton>
      </div>
      <div className={classes.webFooter}>
        <Button
          variant="contained"
          size="small"
          className={classes.button}
          startIcon={<BusinessCenterIcon />}
        >
          Manage
        </Button>
        <div>
          <p>{profileDetails.email} |</p>
          <p className={classes.SignOutButton} onClick={SignOutButtonHandler}>
            Sign out
          </p>
        </div>
      </div>
    </div>
  );
}
