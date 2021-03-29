import { SIGN_IN, SIGN_OUT } from "../actions/Auth";

const initialState = {
  userId: "",
  isAuth: false,
  token: "",
  setDIdTryAutoLogin: false,
  name: "",
  email: "",
  displayPicture: "",
};

export default function AuthReducer(state = initialState, action) {
  switch (action.type) {
    case SIGN_IN: {
      const { userId, displayPicture, name, email, token } = action.payload;
      return {
        isAuth: true,
        setDIdTryAutoLogin: true,
        userId: userId,
        displayPicture: displayPicture,
        name: name,
        email: email,
        token: token,
      };
    }
    case SIGN_OUT: {
      return initialState;
    }
    default: {
      return state;
    }
  }
}
