import { TextField } from "@mui/material";

import { useContext } from "react";
import { JsonContext } from "../../context/JsonContext";

const ErrorMessage = () => {
  const { state, dispatch } = useContext(JsonContext);

  const value = state.pages[state.currentPage].fields.find(
    ({ fieldId }) => fieldId === state.currentField
  ).validation.error;

  const updateErrorMessage = (event) => {
    dispatch({
      type: "UPDATE_VALIDATION",
      data: {
        key: "error",
        value: event.target.value,
      },
    });
  };

  return (
    <TextField
      fullWidth
      label="Error Message"
      size="small"
      title="Enter a message to display when validation fails"
      placeholder="Message to display when validation fails"
      value={value}
      onChange={updateErrorMessage}
    />
  );
};

export default ErrorMessage;
