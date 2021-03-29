import React, { useEffect, useState } from "react";
import classes from "./HomePage.css";
import logo from "../../assets/logo.png";
import { useSelector, useDispatch } from "react-redux";
import { Button, IconButton } from "@material-ui/core";
import * as authActions from "../../store/actions/Auth";
import * as taskActions from "../../store/actions/Task";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import AddIcon from "@material-ui/icons/Add";

import SendIcon from "@material-ui/icons/Send";
import TaskContainer from "../../components/TaskContainer/TaskContainer";

export default function HomePage(props) {
  const dispatch = useDispatch();
  const profileDetails = useSelector((state) => state.Auth);
  const storedTasks = useSelector((state) => state.Task.tasks);
  const [tasks,setTasks]=useState(storedTasks)

  const [task, setTask] = useState("");


  useEffect(() => {
    if (!profileDetails.isAuth) {
      props.history.replace("sign-in");
    }
  },[profileDetails.isAuth,props.history]);




  const SignOutButtonHandler = async () => {
    await dispatch(authActions.signOut());
    props.history.replace("sign-in");
  };

  const addTaskHandler = () => {
    if(task.length===0){
      return
    }
    dispatch(taskActions.addTask(task));
    setTasks(tasks.concat(task))
    setTask("");
  };

  const deleteTaskHandler=async(index,task)=>{
    await dispatch(taskActions.deleteTask(index,task))
    setTasks(storedTasks)
  }

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
            <p>{tasks.length} tasks</p>
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
        <div className={classes.allTaskContainer} >
            {tasks.map((task,index)=>{
              return <TaskContainer index={index} task={task} deleteTaskHandler={deleteTaskHandler} />
            })}
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
