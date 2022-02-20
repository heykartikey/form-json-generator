import { TextField } from "@mui/material";

import { useContext } from "react";
import { JsonContext } from "../../context/JsonContext";

const ContentValidation = () => {
  const { state, dispatch } = useContext(JsonContext);

  const value = state.pages[state.currentPage].fields.find(
    ({ fieldId }) => fieldId === state.currentField
  ).validation.contentValidation;

  const updateContentValidation = (event) => {
    dispatch({
      type: "UPDATE_VALIDATION",
      data: {
        key: "contentValidation",
        value: event.target.value,
      },
    });
  };

  return (
    <TextField
      fullWidth
      size="small"
      label="Content Validation"
      title="Enter a regular expression"
      placeholder="Enter a regular expression"
      value={value}
      onChange={updateContentValidation}
    />
  );
};

export default ContentValidation;
