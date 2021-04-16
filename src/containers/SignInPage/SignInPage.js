import React, { useEffect } from "react";
import Logo from "../../components/Logo";
import classes from "./SignInPage.css";
import firebase from "../../firebase";
import * as authActions from "../../store/actions/Auth";
import { useDispatch, useSelector } from "react-redux";

export default function SignInPage(props) {
  const dispatch = useDispatch();

  const profileDetails = useSelector((state) => state.Auth);
  // console.log(profileDetails);

  useEffect(() => {
    console.log(profileDetails.isAuth);
    if (profileDetails.isAuth) {
      props.history.replace("home");
    }
  }, [profileDetails.isAuth, props.history]);

  const signInHandler = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION).then(()=>{

      firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
       
        let name = result.user.displayName;
        let email = result.user.email;
        let token = result.user.getIdToken();
        let userId = result.user.uid;
        let displayPicture = result.user.photoURL;
        dispatch(
          authActions.signIn(userId, token, name, email, displayPicture)
          );
          props.history.push("/home");
          // ...
        })
        .catch((error) => {
          // Handle Errors here.
          console.log(error);
          // var errorCode = error.code;
          // var errorMessage = error.message;
          // The email of the user's account used.
          // var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          // var credential = error.credential;
          // ...
        });
      })
      };

  return (
    <div className={classes.container}>
      <div className={classes.logo}>
        <Logo />
      </div>
      <p className={classes.subTitle}>
        Organising your daily tasks can improve your productivity & lead to
        enhanced work quality
      </p>
      <video
        autoPlay
        src="https://app.brutask.com/assets/video/login-animation.mp4"
        playsInline
      ></video>
      <button onClick={signInHandler} className={classes.SignInButton}>
        <i className="fab fa-google"></i> Sign in with Google
      </button>
      <p className={classes.info}>
        We will be supporting more sign-in options soon
      </p>
    </div>
  );
}
