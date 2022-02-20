import { TextField } from "@mui/material";

import { useContext } from "react";
import { JsonContext } from "../../context/JsonContext";

const FieldId = () => {
  const { state, dispatch } = useContext(JsonContext);

  const value = state.currentField;

  const updateFieldId = (event) => {
    dispatch({
      type: "UPDATE_FIELD_ID",
      data: event.target.value,
    });
  };

  return (
    <TextField
      fullWidth
      label="Field Id"
      size="small"
      title="Enter the id of the field"
      placeholder="Id of the field"
      value={value}
      onChange={updateFieldId}
    />
  );
};

export default FieldId;
