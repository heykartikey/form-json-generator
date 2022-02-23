import { Stack, TextField, Typography } from "@mui/material";
import DatePicker from "@mui/lab/DatePicker";
import DateAdapter from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";

import { useContext } from "react";
import { JsonContext } from "../../context/JsonContext";

const DateValidation = () => {
  const { state, dispatch } = useContext(JsonContext);

  const value = state.pages[state.currentPage].fields.find(
    ({ fieldId }) => fieldId === state.currentField
  ).validation.dateValidation;

  const updateDateValidation = (value, key) => {
    dispatch({
      type: "UPDATE_DATE_VALIDATION",
      data: {
        key,
        value,
      },
    });
  };

  return (
    <Stack gap={2}>
      <Typography variant="subtitle2">Date Validation</Typography>
      <Stack direction="row" gap={2}>
        <LocalizationProvider dateAdapter={DateAdapter}>
          <DatePicker
            label="Start Date"
            views={["year", "month", "day"]}
            openTo="year"
            inputFormat="dd/MM/yyyy"
            onChange={(value) => updateDateValidation(value, "min")}
            value={value?.min ?? null}
            renderInput={(params) => <TextField {...params} size="small" />}
          />
        </LocalizationProvider>
        <LocalizationProvider dateAdapter={DateAdapter}>
          <DatePicker
            label="End Date"
            views={["year", "month", "day"]}
            openTo="year"
            inputFormat="dd/MM/yyyy"
            onChange={(value) => updateDateValidation(value, "max")}
            value={value?.max ?? null}
            renderInput={(params) => <TextField {...params} size="small" />}
          />
        </LocalizationProvider>
      </Stack>
    </Stack>
  );
};

export default DateValidation;
