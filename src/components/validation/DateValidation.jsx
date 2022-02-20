import { Stack, TextField, Typography } from "@mui/material";

const DateValidation = () => {
  return (
    <Stack gap={2}>
      <Typography variant="subtitle2">Date Validation</Typography>
      <Stack direction="row" gap={2}>
        <TextField
          fullWidth
          size="small"
          label="Start Date"
          defaultValue="21/09/1999"
          inputProps={{ min: 0 }}
        />
        <TextField
          fullWidth
          size="small"
          label="End Date"
          defaultValue="21/09/1999"
        />
      </Stack>
    </Stack>
  );
};

export default DateValidation;
