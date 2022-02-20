import { cloneDeep } from "lodash";

export const updateValidation = (state, action) => {
  const newState = cloneDeep(state);

  newState.pages[newState.currentPage].fields.find(
    ({ fieldId }) => fieldId === newState.currentField
  ).validation[action.data.key] = action.data.value;

  return newState;
};
