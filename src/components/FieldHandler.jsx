import { Grid, Button } from "@mui/material";
import AutoComplete from "./form-fields/AutoComplete";
import Text from "./form-fields/Text";
import FormButton from "./form-fields/FormButton";
import FileInput from "./form-fields/FileInput";
import RadioGroupInput from "./form-fields/RadioGroupInput";
import DatePickerInput from "./form-fields/DatePickerInput";
import DividerLine from "./form-fields/DividerLine";
import SectionLabel from "./form-fields/SectionLabel";

function FieldHandler({ field }) {
  const {
    viewType = "",
    alignment: { col },
  } = field;

  switch (viewType) {
    case "text":
      return (
        <Grid item xs={col}>
          <Text field={field} />
        </Grid>
      );
    case "button":
      return (
        <Grid item xs={col}>
          <FormButton field={field} />
        </Grid>
      );
    case "file":
      return (
        <Grid item xs={col}>
          <FileInput field={field} />
        </Grid>
      );
    case "autoCompleteText":
      return (
        <Grid item xs={col}>
          <AutoComplete field={field} />
        </Grid>
      );
    case "radioGroup":
      return (
        <Grid item xs={col}>
          {RadioGroupInput({
            field,
          })}
        </Grid>
      );
    case "date":
      return (
        <Grid item xs={col}>
          {DatePickerInput({
            field,
          })}
        </Grid>
      );
    case "divider":
      return (
        <Grid item xs={col}>
          <DividerLine />
        </Grid>
      );
    case "break":
      return <Grid item xs={col}></Grid>;
    case "sectionTitle":
      return (
        <Grid item xs={col}>
          <SectionLabel field={field} />
        </Grid>
      );
    default:
      return null;
  }
}

export default FieldHandler;
