import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Stack,
  Typography,
} from "@mui/material";

import { ExpandMore } from "@mui/icons-material";

import Horizontal from "./Horizontal";
import ColumnSize from "./ColumnSize";
import NewRow from "./NewRow";
import Variant from "./Variant";

const Alignment = ({ expanded, handleExpand }) => (
  <Accordion
    disableGutters
    square
    elevation={0}
    expanded={expanded}
    onChange={() => handleExpand("alignment")}
    sx={{
      ":before": {
        display: "none",
      },
      border: "1px solid rgba(0, 0, 0, .125)",
      borderBottom: "none",
    }}
  >
    <AccordionSummary expandIcon={<ExpandMore />}>
      <Typography variant="subtitle1">Alignment</Typography>
    </AccordionSummary>
    <AccordionDetails>
      <Stack gap={2}>
        <Horizontal />
        <ColumnSize />
        <Variant />
        <NewRow />
      </Stack>
    </AccordionDetails>
  </Accordion>
);

export default Alignment;
