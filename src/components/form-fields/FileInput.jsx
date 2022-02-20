import {
  Button,
  Typography,
  FormLabel,
  FormHelperText,
  FormControl,
} from "@mui/material";

import { FileUploadOutlined } from "@mui/icons-material";

export default function FileInput({ field }) {
  const {
    fieldId,
    title,
    value,
    placeholder,
    enabled,
    validation: { error },
  } = field;

  return (
    <FormControl disabled={!enabled}>
      <FormLabel>{title}</FormLabel>
      <Button
        variant="outlined"
        startIcon={<FileUploadOutlined />}
        component="label"
      >
        <Typography noWrap>{placeholder}</Typography>
        <input
          id={fieldId}
          accept=".jpg, .jpeg, .png, .pdf"
          type="file"
          value={value}
          hidden
        />
      </Button>
      <FormHelperText>{error}</FormHelperText>
    </FormControl>
  );
}
