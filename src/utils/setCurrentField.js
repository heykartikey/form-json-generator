import { cloneDeep } from "lodash";

export const setCurrentField = (state, action) => {
  const newState = cloneDeep(state);
  newState.currentField = action.data;

  return newState;
};
