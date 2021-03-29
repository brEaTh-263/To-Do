import firebase from "firebase";
export const SIGN_OUT = "SIGN_OUT";
export const SIGN_IN = "SIGN_IN";

export const autoLogin = () => {
  return async (dispatch) => {
    const user = firebase.auth().currentUser;
    if (user) {
      let name = user.displayName;
      let email = user.email;
      let token = user.getIdToken();
      let userId = user.uid;
      let displayPicture = user.photoURL;

      dispatch({
        type: SIGN_IN,
        payload: {
          userId: userId,
          token: token,
          name,
          email,
          displayPicture,
        },
      });
    }
  };
};

export const signIn = (userId, token, name, email, displayPicture) => {
  return async (dispatch) => {
    dispatch({
      type: SIGN_IN,
      payload: {
        userId: userId,
        token: token,
        name,
        email,
        displayPicture,
      },
    });
  };
};

export const signOut = () => {
  return async (dispatch) => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: SIGN_OUT });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
