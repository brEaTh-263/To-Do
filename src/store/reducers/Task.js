import { SIGN_IN } from "../actions/Auth";
import { ADD_TASK, DELETE_TASK } from "../actions/Task";

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
    case DELETE_TASK:{
      let newTasks=state.tasks
      newTasks.splice(action.payload.index,1)
      console.log(newTasks)
      return {
        tasks:newTasks
      }
    }

    case SIGN_IN:{
      return {
      tasks:action.payload.tasks
      }
    }

      default:
      return state;
  }
}
