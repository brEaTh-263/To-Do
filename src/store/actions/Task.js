export const ADD_TASK = "ADD_TASK";

export const addTask = (task) => {
  return async (dispatch) => {
    dispatch({ type: ADD_TASK, payload: { task: task } });
  };
};
