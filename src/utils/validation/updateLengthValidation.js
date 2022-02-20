import { cloneDeep } from "lodash";

export const updateLengthValidation = (state, action) => {
  const newState = cloneDeep(state);

  newState.pages[newState.currentPage].fields.find(
    ({ fieldId }) => fieldId === newState.currentField
  ).validation.lengthValidation[action.data.key] = action.data.value;

  return newState;
};
