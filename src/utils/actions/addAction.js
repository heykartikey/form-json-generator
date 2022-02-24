import {cloneDeep} from 'lodash'; 

export const addAction = (state, action) => {
  const newState = cloneDeep(state);
  const {fieldId, eventType} = action.data; 
  newState.pages[newState.currentPage].fields.find((field) => field.fieldId === fieldId).events.find((event) => event.type === eventType).actions.push(action.data.value);
  return newState; 
}