import { cloneDeep } from "lodash";

export const updateFieldId = (state, action) => {
  const newState = cloneDeep(state);

  newState.pages[newState.currentPage].fields.find(
    ({ fieldId }) => fieldId === newState.currentField
  ).fieldId = action.data;

  newState.currentField = action.data;

  return newState;
};
