import { cloneDeep } from "lodash";

export const deletePage = (state, action) => {
  const newState = cloneDeep(state);
  newState.pages.splice(action.data, 1);
  
  return newState;
};
