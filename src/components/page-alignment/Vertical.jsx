import { MenuItem, TextField } from "@mui/material";
import { useContext } from "react";
import { JsonContext } from "../../context/JsonContext";

const options = {
  top: "Top",
  center: "Center",
  bottom: "Bottom",
};

export const Vertical = () => {
  const { state, dispatch } = useContext(JsonContext);
  const value = state.pages[state.currentPage].alignment.vertical;
  console.log(value)
  const updateVertical = (event) => {
    dispatch({
      type: "UPDATE_PAGE_ALIGNMENT",
      data: {
        key: "vertical",
        value: event.target.value,
      },
    });
  };

  return (
    <TextField
      size="small"
      fullWidth
      select
      label="Vertical"
      value={value}
      onChange={updateVertical}
    >
      {Object.entries(options).map(([key, value]) => {
        return (
          <MenuItem key={key} value={key}>
            {value}
          </MenuItem>
        );
      })}
    </TextField>
  );
};
