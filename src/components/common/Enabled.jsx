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

const Enabled = () => {
  const { state, dispatch } = useContext(JsonContext);

  const value = state.pages[state.currentPage].fields.find(
    ({ fieldId }) => fieldId === state.currentField
  ).enabled
    ? "yes"
    : "no";

  const updateEnabled = (event) => {
    dispatch({
      type: "UPDATE_COMMON",
      data: {
        key: "enabled",
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
      <Typography variant="subtitle2">Enabled</Typography>
      <FormControl>
        <RadioGroup row value={value} onChange={updateEnabled}>
          <FormControlLabel value="yes" control={<Radio />} label="Yes" />
          <FormControlLabel value="no" control={<Radio />} label="No" />
        </RadioGroup>
      </FormControl>
    </Stack>
  );
};

export default Enabled;
