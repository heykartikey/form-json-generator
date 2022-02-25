import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  AccordionActions,
  Button,
  Stack,
  Typography,
} from "@mui/material";

import { ExpandMore } from "@mui/icons-material";

const ActionAccordion = ({
  index,
  fieldId,
  eventType,
  actionType,
  saveAction,
  dispatch,
  children,
}) => {
  //TODO: Implement
  const removeAction = () => {
    dispatch({
      type: "REMOVE_ACTION",
      data: {
        index,
        fieldId,
        eventType,
      },
    });
  };

  return (
    <Accordion
      disableGutters
      square
      elevation={0}
      sx={{
        ":before": {
          display: "none",
        },
        border: "1px solid rgba(0, 0, 0, .125)",
      }}
    >
      <AccordionSummary expandIcon={<ExpandMore />}>
        <Stack direction="row" gap={1} alignItems="center">
          <Typography variant="subtitle1">Action #{index}:</Typography>
          <Typography variant="subtitle2">{actionType}</Typography>
        </Stack>
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
      <AccordionActions>
        {/* <Button onClick={removeAction}>Remove</Button> */}
        <Button onClick={() => saveAction(index)}>Save</Button>
      </AccordionActions>
    </Accordion>
  );
};

export default ActionAccordion;
