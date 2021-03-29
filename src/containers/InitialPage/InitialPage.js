import React, { useEffect, useCallback } from "react";
import classes from "./InitialPage.css";
import CircularProgress from "@material-ui/core/CircularProgress";
import * as authActions from "../../store/actions/Auth";
import { useDispatch, useSelector } from "react-redux";

export default function InitialPage(props) {
  const dispatch = useDispatch();
  console.log(props);
  const isAuth = useSelector((state) => state.Auth.isAuth);

  const checkAutoLogIn = useCallback(async () => {
    await dispatch(authActions.autoLogin());
    console.log(isAuth);
    if (isAuth) {
      return props.history.push("home");
    } else {
      return props.history.push("get-started");
    }
  }, [dispatch, isAuth, props.history]);

  useEffect(() => {
    checkAutoLogIn();
  }, [checkAutoLogIn]);

  return (
    <div className={classes.Container}>
      <CircularProgress />
    </div>
  );
}
