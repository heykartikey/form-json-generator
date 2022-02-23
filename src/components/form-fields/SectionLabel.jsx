import { Typography } from "@mui/material";

const SectionLabel = ({ field, onClick }) => (
  <Typography variant="h6" color="primary" onClick={onClick}>
    {field.value}
  </Typography>
);

export default SectionLabel;
