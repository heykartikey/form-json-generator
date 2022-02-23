import { cloneDeep } from "lodash";

export const reorderField = (state, action) => {
  const { dragIndex, dropIndex } = action.data;
  if (dragIndex === dropIndex) return state;

  const newState = cloneDeep(state);

  const draggedField = newState.pages[newState.currentPage].fields.splice(
    dragIndex,
    1
  )[0];

  newState.pages[newState.currentPage].fields.splice(
    dropIndex,
    0,
    draggedField
  );

  return newState;
};
