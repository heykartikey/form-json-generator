import _ from "lodash";

export const deleteField = (state, action) => {
  const newState = _.cloneDeep(state);
  newState.pages[newState.currentPage].fields = newState.pages[
    newState.currentPage
  ].fields.filter(({ fieldId }) => fieldId !== action.data);

  return newState;
};
