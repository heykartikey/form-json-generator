import { cloneDeep } from "lodash";

export const updateCommon = (state, action) => {
  const newState = cloneDeep(state);
  console.log(action);
  newState.pages[newState.currentPage].fields.find(
    ({ fieldId }) => fieldId === (action.data.fieldId ?? newState.currentField)
  )[action.data.key] = action.data.value;

  return newState;
};
