import {cloneDeep} from 'lodash';

export const updatePageAlignment = (state, action) => {
  const newState = cloneDeep(state);
  newState.pages[newState.currentPage].alignment[action.data.key] = action.data.value;

  return newState; 
}