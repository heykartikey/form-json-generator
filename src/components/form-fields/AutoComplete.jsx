import { Autocomplete, TextField } from "@mui/material";

function AutoComplete({ field }) {
  const {
    fieldId,
    title,
    value,
    placeholder,
    enabled,
    validation: { error },
  } = field;

  return (
    <Autocomplete
      id={fieldId}
      options={[]}
      disabled={!enabled}
      value={value}
      renderInput={(params) => (
        <TextField
          {...params}
          placeholder={placeholder}
          size="small"
          label={title}
          helperText={error}
        />
      )}
    />
  );
}

export default AutoComplete;
