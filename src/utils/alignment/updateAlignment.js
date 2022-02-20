import { cloneDeep } from "lodash";

export const updateAlignment = (state, action) => {
  const newState = cloneDeep(state);

  newState.pages[newState.currentPage].fields.find(
    ({ fieldId }) => fieldId === newState.currentField
  ).alignment[action.data.key] = action.data.value;

  return newState;
};
