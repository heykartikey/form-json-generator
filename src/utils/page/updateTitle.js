import { cloneDeep } from "lodash";

export const updatePageTitle = (state, action) => {
  const newState = cloneDeep(state);
  newState.pages[newState.currentPage].title = action.data;

  return newState;
}