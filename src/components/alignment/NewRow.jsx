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

const NewRow = () => {
  const { state, dispatch } = useContext(JsonContext);

  const value =
    state.pages[state.currentPage].fields.find(
      ({ fieldId }) => fieldId === state.currentField
    ).alignment.row === "new"
      ? "yes"
      : "no";

  const updateNewRow = (event) => {
    dispatch({
      type: "UPDATE_ALIGNMENT",
      data: {
        key: "row",
        value: event.target.value === "yes" ? "new" : "",
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
      <Typography variant="subtitle2">New Row</Typography>
      <FormControl>
        <RadioGroup row value={value} onChange={updateNewRow}>
          <FormControlLabel value="yes" control={<Radio />} label="Yes" />
          <FormControlLabel value="no" control={<Radio />} label="No" />
        </RadioGroup>
      </FormControl>
    </Stack>
  );
};

export default NewRow;
