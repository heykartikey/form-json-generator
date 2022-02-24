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

  const row_value =
    state.pages[state.currentPage].fields.find(
      ({ fieldId }) => fieldId === state.currentField
    ).alignment.row === "new"
      ? "yes"
      : "no";

  const direction_value = state.pages[state.currentPage].fields.find(
    ({ fieldId }) => fieldId === state.currentField
  ).alignment.direction;

  const updateNewRow = (event) => {
    dispatch({
      type: "UPDATE_ALIGNMENT",
      data: {
        key: "row",
        value: event.target.value === "yes" ? "new" : "",
      },
    });
  };

  const updateDirection = (event) => {
    dispatch({
      type: "UPDATE_ALIGNMENT",
      data: {
        key: "direction",
        value: event.target.value,
      },
    });
  };

  return (
    <>
      <Stack
        direction="row"
        gap={2}
        alignItems="center"
        justifyContent="space-between"
      >
        <Typography variant="subtitle2">New Row</Typography>
        <FormControl>
          <RadioGroup row value={row_value} onChange={updateNewRow}>
            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="no" control={<Radio />} label="No" />
          </RadioGroup>
        </FormControl>
      </Stack>
      {row_value === "yes" && (
        <Stack
          direction="row"
          gap={2}
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography variant="subtitle2">Direction?</Typography>
          <FormControl>
            <RadioGroup row value={direction_value} onChange={updateDirection}>
              <FormControlLabel value="row" control={<Radio />} label="Row" />
              <FormControlLabel
                value="column"
                control={<Radio />}
                label="Column"
              />
            </RadioGroup>
          </FormControl>
        </Stack>
      )}
    </>
  );
};

export default NewRow;
