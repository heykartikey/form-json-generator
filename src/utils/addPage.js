import _ from "lodash";
import { defaultPage } from "./constant";

export const addPage = (state) => {
  const newState = _.cloneDeep(state);

  newState.pages.push(_.cloneDeep(defaultPage));
  newState.pages.at(-1).title = `Page ${newState.pages.length}`;
  newState.pages.at(-1).pageId = newState.pages.length; 

  return newState;
};
