import {
  Button,
  Typography,
  FormLabel,
  FormHelperText,
  FormControl,
} from "@mui/material";

import { FileUploadOutlined } from "@mui/icons-material";

export default function FileInput({ field, onClick }) {
  const {
    fieldId,
    title,
    placeholder,
    enabled,
    validation: { error },
  } = field;

  return (
    <FormControl disabled={!enabled} onClick={onClick}>
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
          hidden
        />
      </Button>
      <FormHelperText>{error}</FormHelperText>
    </FormControl>
  );
}
