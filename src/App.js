import { BrowserRouter } from "react-router-dom";

import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import TaskReducer from "./store/reducers/Task";
import AuthReducer from "./store/reducers/Auth";
import ReduxThunk from "redux-thunk";
import "./firebase";
import Routes from "./Routes";
function App() {
  const rootReducer = combineReducers({
    Auth: AuthReducer,
    Task: TaskReducer,
  });

  const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
