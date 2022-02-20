import { TextField } from "@mui/material";

import { useContext } from "react";
import { JsonContext } from "../../context/JsonContext";

const Value = () => {
  const { state, dispatch } = useContext(JsonContext);

  const value = state.pages[state.currentPage].fields.find(
    ({ fieldId }) => fieldId === state.currentField
  ).value;

  const updateValue = (event) => {
    dispatch({
      type: "UPDATE_COMMON",
      data: {
        key: "value",
        value: event.target.value,
      },
    });
  };

  return (
    <TextField
      fullWidth
      label="Value"
      size="small"
      title="Enter the default value of the field"
      placeholder="Default value of the field"
      value={value}
      onChange={updateValue}
    />
  );
};

export default Value;
