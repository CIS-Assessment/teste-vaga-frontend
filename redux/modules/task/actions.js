import MODULE_NAME from "./constants";

export const CREATE = `${MODULE_NAME}/CREATE`;
export const UPDATE = `${MODULE_NAME}/UPDATE`;
export const DELETE = `${MODULE_NAME}/DELETE`;

export const create = ({ id, title, description, deadline }) => ({
  type: CREATE,
  payload: { id, title, description, deadline },
});

export const update = (task) => ({
  type: UPDATE,
  payload: task,
});

export const remove = (id) => ({
  type: DELETE,
  payload: { id },
});
