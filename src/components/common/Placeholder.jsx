import { TextField } from "@mui/material";

import { useContext } from "react";
import { JsonContext } from "../../context/JsonContext";

const Placeholder = () => {
  const { state, dispatch } = useContext(JsonContext);

  const value = state.pages[state.currentPage].fields.find(
    ({ fieldId }) => fieldId === state.currentField
  ).placeholder;

  const updatePlaceholder = (event) => {
    dispatch({
      type: "UPDATE_COMMON",
      data: {
        key: "placeholder",
        value: event.target.value,
      },
    });
  };

  return (
    <TextField
      fullWidth
      label="Placeholder"
      size="small"
      title="Enter the placeholder of the field"
      value={value}
      onChange={updatePlaceholder}
    />
  );
};

export default Placeholder;
