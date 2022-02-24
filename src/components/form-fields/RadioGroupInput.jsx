import { Grid, Button, FormHelperText } from "@mui/material";
import { useContext } from "react";
import { JsonContext } from "../../context/JsonContext";

const initialOptions = [
  {
    internalName: "null",
    displayName: "Make sure you add list values (if any)!",
  },
];

export default function RadioGroupInput({ field, onClick }) {
  const { fieldId, value, enabled, validation: { error } = {} } = field;
  const { state } = useContext(JsonContext);

  const options =
    state.pages[state.currentPage].fields.find(
      (field) => fieldId === field.fieldId
    )?.listValues?.values ?? initialOptions;

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
