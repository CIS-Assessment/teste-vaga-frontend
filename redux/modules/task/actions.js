import MODULE_NAME from "./constants";

export const SETTASK = `${MODULE_NAME}/SETTASK`;

export const UPDATETASK = `${MODULE_NAME}/UPDATETASK`;

export const setTask = ({ title, description, deadline }) => ({
  type: SETTASK,
  payload: { title, description, deadline },
});

export const updateTask = (task) => ({
  type: UPDATETASK,
  payload: task,
});
