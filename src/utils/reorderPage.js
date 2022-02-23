import { cloneDeep } from "lodash";

export const reorderPage = (state, action) => {
  const { dragIndex, dropIndex } = action.data;
  if (dragIndex === dropIndex) return state;

  const newState = cloneDeep(state);
  const draggedPage = newState.pages.splice(dragIndex, 1)[0];
  newState.pages.splice(dropIndex, 0, draggedPage);

  return newState;
};
