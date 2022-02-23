import DatePicker from "@mui/lab/DatePicker";
import DateAdapter from "@mui/lab/AdapterDateFns";
import { TextField } from "@mui/material";
import LocalizationProvider from "@mui/lab/LocalizationProvider";

export default function DatePickerInput({ field }, onClick) {
  const {
    title,
    enabled,
    validation: { error },
  } = field;

  return (
    <LocalizationProvider dateAdapter={DateAdapter}>
      <DatePicker
        onClick={onClick}
        label={title}
        views={["year", "month", "day"]}
        openTo="year"
        disabled={!enabled}
        inputFormat="dd/MM/yyyy"
        onChange={(value) => {}}
        renderInput={(params) => (
          <TextField
            size="small"
            {...params}
            error={false}
            helperText={error}
            fullWidth
          />
        )}
      />
    </LocalizationProvider>
  );
}
