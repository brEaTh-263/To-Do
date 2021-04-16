import React, { useEffect, useCallback } from "react";
import classes from "./InitialPage.css";
import CircularProgress from "@material-ui/core/CircularProgress";
import * as authActions from "../../store/actions/Auth";
import { useDispatch} from "react-redux";
import firebase from "../../firebase"

export default function InitialPage(props) {
  const dispatch = useDispatch();
  console.log(props);
  const checkAutoLogIn = useCallback(async () => {
        firebase.auth().onAuthStateChanged(async(user)=>{
          console.log(user)
          if(user){
        await dispatch(authActions.autoLogin());
        return props.history.push("home");
      }else{
        return props.history.push("get-started");
      }
    })

  }, [props.history,dispatch]);

  useEffect(() => {
    checkAutoLogIn();
  }, [checkAutoLogIn]);

  return (
    <div className={classes.Container}>
      <CircularProgress />
    </div>
  );
}
