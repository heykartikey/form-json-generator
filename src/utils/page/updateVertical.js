import {cloneDeep} from 'lodash';

export const updatePageVertical = (state, action) => {
  const newState = cloneDeep(state);
  newState.pages[newState.currentPage].alignment[action.data.key] = action.data.value;
  console.log(newState) ;
  return newState; 
}