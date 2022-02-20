import { cloneDeep } from "lodash";

export const updateCommon = (state, action) => {
  const newState = cloneDeep(state);

  newState.pages[newState.currentPage].fields.find(
    ({ fieldId }) => fieldId === newState.currentField
  )[action.data.key] = action.data.value;

  return newState;
};
