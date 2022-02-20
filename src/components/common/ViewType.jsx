import { MenuItem, TextField } from "@mui/material";

import { useContext } from "react";
import { JsonContext } from "../../context/JsonContext";

const options = {
  text: "Text Box",
  button: "Button",
  file: "File Input",
  autoCompleteText: "Auto Complete Text",
  radioGroup: "Radio Group",
  date: "Date",
  divider: "Divider",
  break: "Break",
  sectionTitle: "Section Title",
};

const ViewType = () => {
  const { state, dispatch } = useContext(JsonContext);

  const value = state.pages[state.currentPage].fields.find(
    ({ fieldId }) => fieldId === state.currentField
  ).viewType;

  const updateViewType = (event) => {
    dispatch({
      type: "UPDATE_COMMON",
      data: {
        key: "viewType",
        value: event.target.value,
      },
    });
  };

  return (
    <TextField
      fullWidth
      select
      label="View Type"
      size="small"
      value={value}
      onChange={updateViewType}
    >
      {Object.entries(options).map(([key, value]) => (
        <MenuItem key={key} value={key}>
          {value}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default ViewType;
