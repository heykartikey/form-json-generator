import {
  RadioGroup,
  Radio,
  Stack,
  Typography,
  FormControl,
  FormControlLabel,
} from "@mui/material";

import { useContext } from "react";
import { JsonContext } from "../../context/JsonContext";

const Required = () => {
  const { state, dispatch } = useContext(JsonContext);

  const value = state.pages[state.currentPage].fields.find(
    ({ fieldId }) => fieldId === state.currentField
  ).validation.required
    ? "yes"
    : "no";

  const updateRequired = (event) => {
    dispatch({
      type: "UPDATE_VALIDATION",
      data: {
        key: "required",
        value: event.target.value === "yes" ? true : false,
      },
    });
  };

  return (
    <Stack
      direction="row"
      gap={2}
      alignItems="center"
      justifyContent="space-between"
    >
      <Typography variant="subtitle2">Required</Typography>
      <FormControl>
        <RadioGroup row value={value} onChange={updateRequired}>
          <FormControlLabel value="yes" control={<Radio />} label="Yes" />
          <FormControlLabel value="no" control={<Radio />} label="No" />
        </RadioGroup>
      </FormControl>
    </Stack>
  );
};

export default Required;
