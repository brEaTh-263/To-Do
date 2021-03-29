import { ADD_TASK } from "../actions/Task";

const initialState = {
  tasks: [],
};

export default function TaskReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TASK: {
      let newTasks = [];
      newTasks.push(action.payload.task);
      newTasks = newTasks.concat(state.tasks);
      return {
        tasks: newTasks,
      };
    }
    default:
      return state;
  }
}
