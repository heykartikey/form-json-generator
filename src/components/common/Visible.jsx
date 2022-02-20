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

const Visible = () => {
  const { state, dispatch } = useContext(JsonContext);

  const value = state.pages[state.currentPage].fields.find(
    ({ fieldId }) => fieldId === state.currentField
  ).visible
    ? "yes"
    : "no";

  const updateVisible = (event) => {
    dispatch({
      type: "UPDATE_COMMON",
      data: {
        key: "visible",
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
      <Typography variant="subtitle2">Visible</Typography>

      <FormControl>
        <RadioGroup row value={value} onChange={updateVisible}>
          <FormControlLabel value="yes" control={<Radio />} label="Yes" />
          <FormControlLabel value="no" control={<Radio />} label="No" />
        </RadioGroup>
      </FormControl>
    </Stack>
  );
};

export default Visible;
