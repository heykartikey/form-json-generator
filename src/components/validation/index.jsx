import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Stack,
  Typography,
} from "@mui/material";

import { ExpandMore } from "@mui/icons-material";

import ContentValidation from "./ContentValidation";
import ErrorMessage from "./ErrorMessage";
import LengthValidation from "./LengthValidation";
import DateValidation from "./DateValidation";
import Required from "./Required";

const Validation = ({ expanded, handleExpand }) => (
  <Accordion
    disableGutters
    square
    elevation={0}
    expanded={expanded}
    onChange={() => handleExpand("validation")}
    sx={{
      ":before": {
        display: "none",
      },
      border: "1px solid rgba(0, 0, 0, .125)",
    }}
  >
    <AccordionSummary expandIcon={<ExpandMore />}>
      <Typography variant="subtitle1">Validation</Typography>
    </AccordionSummary>
    <AccordionDetails>
      <Stack gap={2}>
        <ErrorMessage />
        <ContentValidation />
        <LengthValidation />
        <DateValidation />
        <Required />
      </Stack>
    </AccordionDetails>
  </Accordion>
);

export default Validation;
