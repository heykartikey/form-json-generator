import { Grid, TextField } from "@mui/material";
import { useState } from "react";

export const Text = ({ field }) => {
  const {
    fieldId,
    title,
    value,
    placeholder,
    visible,
    enabled,
    validation: { lengthValidation: { max = "" } = {}, error } = {},
    inputType = "text",
  } = field;

  return (
    <TextField
    error
      sx={{
        display: visible ? "block" : "none",
      }}
      fullWidth
      helperText={error}
      id={fieldId}
      label={title}
      type={inputType}
      disabled={!enabled}
      placeholder={placeholder}
      inputProps={{
        maxLength: max,
      }}
      size="small"
      value={value}
    />
  );
};

export default Text;
