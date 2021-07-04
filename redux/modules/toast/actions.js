import MODULE_NAME from './constants';

export const ENQUEUE = `${MODULE_NAME}/ENQUEUE`;

export const UNQUEUE = `${MODULE_NAME}/UNQUEUE`;

export const enqueue = ({ content, duration = 3000, severity }) => ({
  type: ENQUEUE,
  payload: { content, duration, severity },
});

export const unqueue = (toastId) => ({
  type: UNQUEUE,
  payload: { toastId },
});
