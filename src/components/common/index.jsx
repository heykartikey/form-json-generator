import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Stack,
  Typography,
} from "@mui/material";

import { ExpandMore } from "@mui/icons-material";

import Title from "./Title";
import FieldId from "./FieldId";
import Enabled from "./Enabled";
import Visible from "./Visible";
import Value from "./Value";
import Placeholder from "./Placeholder";
import ViewType from "./ViewType";

const Common = ({ expanded, handleExpand }) => (
  <Accordion
    disableGutters
    square
    elevation={0}
    expanded={expanded}
    onChange={() => handleExpand("common")}
    sx={{
      ":before": {
        display: "none",
      },
      border: "1px solid rgba(0, 0, 0, .125)",
      borderBottom: "none",
      flexDirection: "column",
      display: "flex",
    }}
  >
    <AccordionSummary expandIcon={<ExpandMore />}>
      <Typography variant="subtitle1">Common</Typography>
    </AccordionSummary>
    <AccordionDetails
    // sx={{
    //   p: 2,
    //   borderTop: "1px solid rgba(0, 0, 0, .125)",
    // }}
    >
      <Stack gap={2}>
        <ViewType />
        <FieldId />
        <Title />
        <Value />
        <Placeholder />
        <Enabled />
        <Visible />
      </Stack>
    </AccordionDetails>
  </Accordion>
);

export default Common;
