import { Grid, Button, FormHelperText } from "@mui/material";

const options = [
  {
    internalName: "Yes",
    displayName: "Yes",
  },
  {
    internalName: "No",
    displayName: "No",
  },
];

export default function RadioGroupInput({ field, onClick }) {
  const { fieldId, value, enabled, validation: { error } = {} } = field;

  return (
    <>
      <Grid container onClick={onClick}>
        {options.map(({ internalName, displayName }, index) => {
          return (
            <Grid
              key={`radio-group-${fieldId}-${index}`}
              item
              style={{ marginRight: 10, minWidth: "3em" }}
            >
              <Button
                disabled={!enabled}
                variant={
                  internalName === value.internalName ? "contained" : "outlined"
                }
              >
                {displayName}
              </Button>
            </Grid>
          );
        })}
      </Grid>
      <Grid item xs={12}>
        <FormHelperText error>{error}</FormHelperText>
      </Grid>
    </>
  );
}
