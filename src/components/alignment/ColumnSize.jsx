import { TextField } from "@mui/material";
import { useContext } from "react";
import { JsonContext } from "../../context/JsonContext";

const ColumnSize = () => {
  const { state, dispatch } = useContext(JsonContext);

  const value = state.pages[state.currentPage].fields.find(
    ({ fieldId }) => fieldId === state.currentField
  ).alignment.col;

  const updateColumnSize = (event) => {
    dispatch({
      type: "UPDATE_ALIGNMENT",
      data: {
        key: "col",
        value: event.target.valueAsNumber,
      },
    });
  };

  return (
    <TextField
      fullWidth
      size="small"
      type="number"
      label="Column Size"
      inputProps={{ min: 1, max: 12 }}
      value={value}
      onChange={updateColumnSize}
    />
  );
};

export default ColumnSize;
