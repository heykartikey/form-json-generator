import { useState, useContext } from "react";
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
} from "@mui/material";

import { JsonContext } from "../../../context/JsonContext";
import { Close } from "@mui/icons-material";

export default function EventActionsModal({
  open,
  fieldId,
  handleClose = () => {},
}) {
  const { state, dispatch } = useContext(JsonContext);
  const { events = [] } =
    state.pages[state.currentPage].fields.find(
      (field) => field.fieldId === fieldId
    ) ?? [];
  console.log("Events: ", events);
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle id="scroll-dialog-title">
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          Actions
          <IconButton onClick={() => handleClose(null)}>
            <Close />
          </IconButton>
        </Stack>
      </DialogTitle>
      <DialogContent dividers>
        <DialogContentText id="scroll-dialog-description">
          <TextField
            fullWidth
            select
            size="small"
            label="Event type"
            value={events[0].type}
            // onChange={updateHorizontal}
          >
            {events.map((event, index) => (
              <MenuItem key={event.type} value={event.type}>
                {event.type}
              </MenuItem>
            ))}
          </TextField>
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
}
