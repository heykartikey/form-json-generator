// import DatePicker from "@mui/lab/DatePicker";
// import DateAdapter from "@mui/lab/AdapterMoment";
// import { TextField } from "@mui/material";
// import LocalizationProvider from "@mui/lab/LocalizationProvider";
// // import moment from "moment";
// import _ from "lodash";

export default function DatePickerInput({ field }) {
  return null;

  const {
    fieldId,
    title,
    validation = {},
    events = [],
    value,
    enabled,
    alignment: { width = "50%", alignItems = "center" } = {},
    Justify,
  } = field;

  const { dateValidation: { start, end } = {} } = validation;

  return (
    <LocalizationProvider dateAdapter={DateAdapter}>
      <DatePicker
        label={title}
        views={["year", "month", "day"]}
        openTo="year"
        disabled={!enabled}
        inputFormat="DD/MM/YYYY"
        minDate={
          start &&
          moment(new Date(moment(start, "DD/MM/YYYY").format("MM/DD/YYYY")))
        }
        maxDate={
          end &&
          moment(new Date(moment(end, "DD/MM/YYYY").format("MM/DD/YYYY")))
        }
        value={moment(formValues[fieldId], "DD/MM/YYYY") || ""}
        onChange={(newValue) => {
          const value = moment(newValue).format("DD/MM/YYYY");
          handleChange(fieldId, value);
        }}
        renderInput={(params) => (
          <TextField
            size={"small"}
            {...params}
            error={!_.isEmpty(formErrors[fieldId])}
            helperText={formErrors[fieldId]}
            fullWidth
          />
        )}
      />
    </LocalizationProvider>
  );
}
