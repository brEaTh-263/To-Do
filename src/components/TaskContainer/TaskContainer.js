import React,{useState} from 'react';
import {IconButton} from "@material-ui/core"
import ClearIcon from '@material-ui/icons/Clear';
import FiberManualRecordOutlinedIcon from '@material-ui/icons/FiberManualRecordOutlined';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import classes from "./TaskContainer.css"

function TaskContainer({index,task,deleteTaskHandler}) {
     const [showFilledIcon,setShowFilledIcon]=useState(false)
    return (
        <div className={classes.taskContainer} key={index}   >
                {!showFilledIcon?<div className={classes.bulletOutlineIcon} >
                  <IconButton onClick={()=>{
                    setShowFilledIcon(true
                      )
                  }} >
                  <FiberManualRecordOutlinedIcon style={{color:"#00ba63"}} />
                  </IconButton>
                </div>:

                <div className={classes.bulletFilledIcon}   >
                  <IconButton onClick={()=>{
                    setShowFilledIcon(false)
                  }} >
                  <CheckCircleIcon style={{color:"#00ba63"}} />
                  </IconButton>
                </div>}
                {showFilledIcon?<del>{task}</del>:<p>{task}</p>}
                <div className={classes.crossIcon} onClick={()=>{
                  deleteTaskHandler(index,task)
                }}><ClearIcon /></div>
              </div>
    );
}

export default TaskContainer;