import { cloneDeep } from "lodash";

export const updatePageId = (state, action) => {
  const newState = cloneDeep(state);
  newState.pages[newState.currentPage].pageId = action.data;

  return newState;
}