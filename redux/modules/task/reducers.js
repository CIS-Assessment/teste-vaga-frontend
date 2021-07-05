import * as actions from "./actions";
import produce from "immer";

const uuid = () => Math.random().toString(36).substr(2, 9);
const initialState = {
  tasks: [],
};

export const reducer = produce((state, action) => {
  switch (action.type) {
    case actions.CREATE:
      state.tasks.push({
        id: uuid(),
        title: action.payload.title,
        description: action.payload.description,
        deadline: action.payload.deadline,
        completed: false,
      });
      break;
    case actions.UPDATE:
      state.tasks = state.tasks.map((r) => {
        if (r.id === action.payload.id) {
          return action.payload;
        }
        return r;
      });
      break;
    case actions.DELETE:
      state.tasks = state.tasks.filter((r) => r.id !== action.payload.id);
      break;
  }
}, initialState);
