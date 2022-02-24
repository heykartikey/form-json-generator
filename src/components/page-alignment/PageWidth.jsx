import { TextField } from "@mui/material";
import { JsonContext } from "../../context/JsonContext";
import { useContext } from "react";
export const PageWidth = () => {
  const { state, dispatch } = useContext(JsonContext);
  const value = state.pages[state.currentPage].alignment.width;

  const updatePageWidth = (event) => {
    dispatch({
      type: "UPDATE_PAGE_ALIGNMENT",
      data: {
        key: "width",
        value: event.target.valueAsNumber + "%",
      },
    });
  };

  return (
    <TextField
      fullWidth
      size="small"
      type="number"
      label="Width (in %)"
      inputProps={{ min: 0, max: 100 }}
      value={value?.split("%")[0] | 0}
      onChange={updatePageWidth}
    />
  );
};
