import { cloneDeep } from "lodash";

export const setCurrentPage = (state, action) => {
  const newState = cloneDeep(state);
  newState.currentPage = action.data;

  return newState;
};
