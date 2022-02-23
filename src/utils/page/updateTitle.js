import { cloneDeep } from "lodash";
import { defaultField } from "../constant";

export const updatePageTitle = (state, action) => {
  const newState = cloneDeep(state);
  newState.pages[newState.currentPage].title = action.data;

  return newState;
}