import MODULE_NAME from "./constants";

export const SETTASK = `${MODULE_NAME}/SETTASK`;

export const setTask = ({ title, description, deadline }) => ({
  type: SETTASK,
  payload: { title, description, deadline },
});
