import { TextField } from "@mui/material";

export const Text = ({ field, onClick }) => {
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
      onClick={onClick}
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
