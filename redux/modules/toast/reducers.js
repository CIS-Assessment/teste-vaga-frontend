import * as actions from './actions';
import produce from 'immer';

const uuid = () => Math.random().toString(36).substr(2, 9);
const initialState = {
  toasts: [],
};

export const reducer = produce((state, action) => {
  switch (action.type) {
    case actions.ENQUEUE:
      state.toasts.push({
        id: uuid(),
        content: action.payload.content,
        duration: action.payload.duration,
        severity: action.payload.severity,
      });
      break;

    case actions.UNQUEUE:
      state.toasts = state.toasts.filter(
        (toast) => toast.id !== action.payload.toastId,
      );
      break;
  }
}, initialState);
