import { cloneDeep } from "lodash";

export const removeAction = (state, action) => {
  const newState = cloneDeep(state);
  const { fieldId, eventType, index, value } = action.data;

  newState.pages[newState.currentPage].fields
    .find((field) => field.fieldId === fieldId)
    .events.find((event) => event.type === eventType)
    .actions.splice(index, 1);

  return newState;
};
