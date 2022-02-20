import _ from "lodash";
import { defaultField } from "./constant";

export const addField = (state) => {
  const newState = _.cloneDeep(state);

  const fieldId = `FieldId_${newState.currentPage}_${
    newState.pages[newState.currentPage].fields.length
  }`;

  newState.pages[newState.currentPage].fields.push(_.cloneDeep(defaultField));
  newState.pages[newState.currentPage].fields.at(-1).fieldId = fieldId;

  return newState;
};
