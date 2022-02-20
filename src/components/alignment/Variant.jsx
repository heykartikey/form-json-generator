import { MenuItem, TextField } from "@mui/material";

import { useContext } from "react";
import { JsonContext } from "../../context/JsonContext";

const options = {
  outlined: "Outlined",
  contained: "Contained",
  text: "Text",
};

const Variant = () => {
  const { state, dispatch } = useContext(JsonContext);

  const value = state.pages[state.currentPage].fields.find(
    ({ fieldId }) => fieldId === state.currentField
  ).alignment.variant;

  const updateVariant = (event) => {
    dispatch({
      type: "UPDATE_ALIGNMENT",
      data: {
        key: "variant",
        value: event.target.value,
      },
    });
  };

  return (
    <TextField
      fullWidth
      select
      size="small"
      label="Variant"
      value={value}
      onChange={updateVariant}
    >
      {Object.entries(options).map(([key, value]) => (
        <MenuItem key={key} value={key}>
          {value}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default Variant;
