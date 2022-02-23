import { cloneDeep } from "lodash";

export const updateDateValidation = (state, action) => {
  const newState = cloneDeep(state);

  newState.pages[newState.currentPage].fields.find(
    ({ fieldId }) => fieldId === newState.currentField
  ).validation.dateValidation[action.data.key] = action.data.value;

  return newState;
};
