import { useState, useContext, forwardRef, useRef, useEffect } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  MenuItem,
  IconButton,
  Stack,
  TextField,
  Typography,
  Divider,
} from "@mui/material";

import { JsonContext } from "../../../context/JsonContext";
import { Add, Close } from "@mui/icons-material";

const eventTypes = ["onSelect", "onClick", "onSubmit", "onEntryLimitReach"];

const EventTypes = ({ eventType, setEventType }) => (
  <TextField
    select
    size="small"
    label="Event Types"
    value={eventType}
    onChange={(event) => setEventType(event.target.value)}
  >
    {eventTypes.map((eventType) => (
      <MenuItem key={eventType} value={eventType}>
        {eventType}
      </MenuItem>
    ))}
  </TextField>
);

export default function EventActionsModal({
  open,
  fieldId,
  handleClose = () => {},
}) {
  const { state, dispatch } = useContext(JsonContext);
  const { events = [] } =
    state.pages[state.currentPage].fields.find(
      (field) => field.fieldId === fieldId
    ) ?? {};

  const [eventType, setEventType] = useState(events[0]?.type ?? "onSelect");

  const actions = useRef([]);

  useEffect(() => {
    actions.current = events?.find(
      (event) => event.type === eventType
    )?.actions;
  }, [eventType]);

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle id="scroll-dialog-title">
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          Events
          <IconButton onClick={() => handleClose(null)}>
            <Close />
          </IconButton>
        </Stack>
      </DialogTitle>
      <DialogContent dividers>
        <DialogContentText>
          <Stack gap={2}>
            <Stack gap={2} direction="row" justifyContent="space-between">
              <EventTypes eventType={eventType} setEventType={setEventType} />
              <Button startIcon={<Add />} variant="outlined" size="small">
                Add Action
              </Button>
            </Stack>
          </Stack>
        </DialogContentText>
        {actions.current.length > 0 ? (
          <div>
            {actions.current.map((action) => {
              // TODO: return Action-specific component
              return null
            })}
          </div>
        ) : (
          <DialogContentText>
            <Typography
              sx={{ textAlign: "center", mt: 2, fontStyle: "italic" }}
            >
              No actions added yet.
            </Typography>
          </DialogContentText>
        )}
      </DialogContent>
      <DialogActions>
        <Button>Cancel</Button>
        <Button variant="contained">Ok</Button>
      </DialogActions>
    </Dialog>
  );
}
