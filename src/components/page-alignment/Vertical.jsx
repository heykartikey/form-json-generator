import { MenuItem, TextField } from "@mui/material";
import { useContext } from "react";
import { JsonContext } from "../../context/JsonContext";

export const Vertical = () => {
  const {state, dispatch} = useContext(JsonContext);
  const value = state.pages[state.currentPage].alignment.vertical; 
  const options = {
    flexStart: 'flex-start',
    center: 'center',
    flexEnd: 'flex-end',
  };

  const updateVertical = (event) => {
    dispatch({
      type: "UPDATE_VERTICAL",
      data: {
        key: "vertical",
        value: event.target.value,
      },
    })
  }
  
  return (
    <TextField
      size="small"
      fullWidth
      select
      label="Align Items"
      value={value} 
      onChange={updateVertical}
    >
      {Object.entries(options).map(([key, value]) => {
        return (
          <MenuItem key={key} value={key}>
            {value}
          </MenuItem>
        )
      })}
    </TextField>
  )
}