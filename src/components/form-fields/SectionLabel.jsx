import { Typography } from "@mui/material";

const SectionLabel = ({ field }) => (
  <Typography variant="h6" color="primary">
    {field.value}
  </Typography>
);

export default SectionLabel;
