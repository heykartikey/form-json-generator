import { MenuItem, TextField } from "@mui/material";
import { useContext } from "react";
import { JsonContext } from "../../context/JsonContext";

const options = {
  start: "Left",
  center: "Center",
  end: "Right",
};

const Horizontal = () => {
  const { state, dispatch } = useContext(JsonContext);

  const value = state.pages[state.currentPage].fields.find(
    ({ fieldId }) => fieldId === state.currentField
  ).alignment.horizontal;

  const updateHorizontal = (event) => {
    dispatch({
      type: "UPDATE_ALIGNMENT",
      data: {
        key: "horizontal",
        value: event.target.value,
      },
    });
  };

  return (
    <TextField
      fullWidth
      select
      size="small"
      label="Horizontal"
      value={value}
      onChange={updateHorizontal}
    >
      {Object.entries(options).map(([key, value]) => (
        <MenuItem key={key} value={key}>
          {value}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default Horizontal;
