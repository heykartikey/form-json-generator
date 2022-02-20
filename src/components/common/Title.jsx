import { TextField } from "@mui/material";

import { useContext } from "react";
import { JsonContext } from "../../context/JsonContext";

const Title = () => {
  const { state, dispatch } = useContext(JsonContext);

  const value = state.pages[state.currentPage].fields.find(
    ({ fieldId }) => fieldId === state.currentField
  ).title;

  const updateTitle = (event) => {
    dispatch({
      type: "UPDATE_COMMON",
      data: {
        key: "title",
        value: event.target.value,
      },
    });
  };

  return (
    <TextField
      fullWidth
      label="Title"
      size="small"
      title="Enter the title of the field"
      placeholder="Title of the field"
      value={value}
      onChange={updateTitle}
    />
  );
};

export default Title;
