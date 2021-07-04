import * as actions from "./actions";
import produce from "immer";

const uuid = () => Math.random().toString(36).substr(2, 9);
const initialState = {
  tasks: [],
};

export const reducer = produce((state, action) => {
  switch (action.type) {
    case actions.SETTASK:
      state.tasks.push({
        id: uuid(),
        title: action.payload.title,
        description: action.payload.description,
        deadline: action.payload.deadline,
      });
      break;
    case actions.UPDATETASK:
      state.tasks = state.tasks.map((r) => {
        if (r.id === action.payload.id) {
          return action.payload;
        }
        return r;
      });
      break;
  }
}, initialState);