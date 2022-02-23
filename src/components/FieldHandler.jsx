import { Grid, Button } from "@mui/material";
import AutoComplete from "./form-fields/AutoComplete";
import Text from "./form-fields/Text";
import FormButton from "./form-fields/FormButton";
import FileInput from "./form-fields/FileInput";
import RadioGroupInput from "./form-fields/RadioGroupInput";
import DatePickerInput from "./form-fields/DatePickerInput";
import DividerLine from "./form-fields/DividerLine";
import SectionLabel from "./form-fields/SectionLabel";

import { useContext } from "react";
import { JsonContext } from "../context/JsonContext";
import ContextMenu from "./ContextMenu";

function FieldHandler({ field }) {
  const { dispatch } = useContext(JsonContext);

  const updateCurrentField = (fieldId) => {
    dispatch({
      type: "SET_CURRENT_FIELD",
      data: fieldId,
    });
  };

  const {
    viewType = "",
    alignment: { col },
  } = field;

  switch (viewType) {
    case "text":
      return (
        <Grid item xs={col}>
          <ContextMenu fieldId={field.fieldId}>
            <Text
              field={field}
              onClick={() => updateCurrentField(field.fieldId)}
            />
          </ContextMenu>
        </Grid>
      );
    case "button":
      return (
        <Grid item xs={col}>
          <ContextMenu fieldId={field.fieldId}>
            <FormButton
              field={field}
              onClick={() => updateCurrentField(field.fieldId)}
            />
          </ContextMenu>
        </Grid>
      );
    case "file":
      return (
        <Grid item xs={col}>
          <ContextMenu fieldId={field.fieldId}>
            <FileInput
              field={field}
              onClick={() => updateCurrentField(field.fieldId)}
            />
          </ContextMenu>
        </Grid>
      );
    case "autoCompleteText":
      return (
        <Grid item xs={col}>
          <ContextMenu fieldId={field.fieldId} showListValues>
            <AutoComplete
              field={field}
              onClick={() => updateCurrentField(field.fieldId)}
            />
          </ContextMenu>
        </Grid>
      );
    case "radioGroup":
      return (
        <Grid item xs={col}>
          <ContextMenu fieldId={field.fieldId} showListValues>
            <RadioGroupInput
              field={field}
              onClick={() => updateCurrentField(field.fieldId)}
            />
          </ContextMenu>
        </Grid>
      );
    case "date":
      return (
        <Grid item xs={col}>
          <ContextMenu fieldId={field.fieldId}>
            <DatePickerInput
              field={field}
              onClick={() => updateCurrentField(field.fieldId)}
            />
          </ContextMenu>
        </Grid>
      );
    case "divider":
      return (
        <Grid item xs={col}>
          <DividerLine onClick={() => updateCurrentField(field.fieldId)} />
        </Grid>
      );
    case "break":
      return (
        <Grid
          item
          xs={col}
          onClick={() => updateCurrentField(field.fieldId)}
        ></Grid>
      );
    case "sectionTitle":
      return (
        <Grid item xs={col}>
          <ContextMenu fieldId={field.fieldId}>
            <SectionLabel
              field={field}
              onClick={() => updateCurrentField(field.fieldId)}
            />
          </ContextMenu>
        </Grid>
      );
    default:
      return null;
  }
}

export default FieldHandler;
