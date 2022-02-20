import { Stack, TextField, Typography } from "@mui/material";

import { useContext } from "react";
import { JsonContext } from "../../context/JsonContext";

const LengthValidation = () => {
  const { state, dispatch } = useContext(JsonContext);

  const value = state.pages[state.currentPage].fields.find(
    ({ fieldId }) => fieldId === state.currentField
  ).validation.lengthValidation;

  const updateLengthValidation = (event, key) => {
    dispatch({
      type: "UPDATE_LENGTH_VALIDATION",
      data: {
        key,
        value: event.target.value,
      },
    });
  };

  return (
    <Stack gap={2}>
      <Typography variant="subtitle2">Length</Typography>
      <Stack direction="row" gap={2}>
        <TextField
          fullWidth
          size="small"
          type="number"
          label="Min"
          value={value.min ?? 0}
          onChange={(e) => updateLengthValidation(e, "min")}
          inputProps={{ min: 0 }}
        />
        <TextField
          fullWidth
          size="small"
          type="number"
          label="Max"
          value={value.max ?? 0}
          onChange={(e) => updateLengthValidation(e, "max")}
          inputProps={{ min: 0 }}
        />
      </Stack>
    </Stack>
  );
};

export default LengthValidation;
