import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Stack,
  Typography,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";

import {Vertical} from './Vertical'; 
import {PageWidth} from './PageWidth'; 

export const PageAlignment = ({ expanded, handleExpand }) => (
  <Accordion
    disableGutters
    square
    elevation={0}
    expanded={expanded}
    onChange={() => handleExpand("pageAlignment")}
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
      <Typography variant="subtitle1">Page Alignment</Typography>
    </AccordionSummary>
    <AccordionDetails
    // sx={{
    //   p: 2,
    //   borderTop: "1px solid rgba(0, 0, 0, .125)",
    // }}
    >
      <Stack gap={2}>
        <PageWidth />
        <Vertical />
      </Stack>
    </AccordionDetails>
  </Accordion>
);
