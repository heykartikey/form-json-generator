import { updateCommon } from "../utils/common/updateCommon";
import { updateFieldId } from "../utils/common/updateFieldId";

import { updateAlignment } from "../utils/alignment/updateAlignment";

import { updateValidation } from "../utils/validation/updateValidation";
import { updateLengthValidation } from "../utils/validation/updateLengthValidation";
import { updateDateValidation } from "../utils/validation/updateDateValidation";

import { setCurrentField } from "../utils/setCurrentField";
import { addField } from "../utils/addField";
import { deleteField } from "../utils/deleteField";

import { addPage } from "../utils/addPage";
import { deletePage } from "../utils/deletePage";
import { setCurrentPage } from "../utils/setCurrentPage";

import { reorderField } from "../utils/reorderField";
import { reorderPage } from "../utils/reorderPage";

import { updatePageTitle } from "../utils/page/updateTitle";
import { updatePageId } from "../utils/page/updatePageId";

import { updatePageAlignment } from "../utils/page/updatePageAlignment";
import { addAction } from "../utils/actions/addAction";
import { updateAction } from "../utils/actions/updateAction";
import { removeAction } from "../utils/actions/removeAction";

const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_COMMON":
      return updateCommon(state, action);
    case "UPDATE_FIELD_ID":
      return updateFieldId(state, action);

    case "UPDATE_ALIGNMENT":
      return updateAlignment(state, action);

    case "UPDATE_VALIDATION":
      return updateValidation(state, action);
    case "UPDATE_LENGTH_VALIDATION":
      return updateLengthValidation(state, action);
    case "UPDATE_DATE_VALIDATION":
      return updateDateValidation(state, action);

    case "SET_CURRENT_FIELD":
      return setCurrentField(state, action);
    case "ADD_FIELD":
      return addField(state);
    case "DELETE_FIELD":
      return deleteField(state, action);

    case "SET_CURRENT_PAGE":
      return setCurrentPage(state, action);
    case "ADD_PAGE":
      return addPage(state);
    case "DELETE_PAGE":
      return deletePage(state, action);

    case "REORDER_FIELD":
      return reorderField(state, action);
    case "REORDER_PAGE":
      return reorderPage(state, action);
    case "UPDATE_PAGE_TITLE":
      return updatePageTitle(state, action);
    case "UPDATE_PAGE_ID":
      return updatePageId(state, action);
    case "UPDATE_PAGE_ALIGNMENT":
      return updatePageAlignment(state, action);
    case "ADD_ACTION":
      return addAction(state, action);
    case "UPDATE_ACTION":
      return updateAction(state, action);
    case "REMOVE_ACTION":
      return removeAction(state, action);
    default:
      return state;
  }
};

export default reducer;
