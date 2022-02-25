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
  Menu,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { JsonContext } from "../../../context/JsonContext";
import { Add, Close } from "@mui/icons-material";

import HitApiAndNavigate from "./HitApiAndNavigate";
import PopulateDataFromApi from "./actions/PopulateDataFromApi";

const actionComp = {
  hitApiAndNavigate: (props) => <HitApiAndNavigate {...props} />,
  populateDataFromApi: (props) => <PopulateDataFromApi {...props} />,
};

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

const typesOfActions = [
  "hitApiAndNavigate",
  "populateDataFromApi",
  "invisible",
  "visible",
  "passValidation",
  "navigate",
];
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

  const [anchorEl, setAnchorEl] = useState(null);

  const openMenu = Boolean(anchorEl);

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const addAction = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const updateEvent = (event) => {
    setEventType(event.target.value);
  };

  return (
    <Dialog fullWidth maxWidth="sm" open={open} onClose={handleClose}>
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
              <div>
                <Button
                  variant="outlined"
                  startIcon={<AddIcon />}
                  onClick={addAction}
                >
                  Add Action
                </Button>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={openMenu}
                  onClose={handleMenuClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  {typesOfActions.map((type) => (
                    <MenuItem
                      value={type}
                      key={type}
                      onClick={() => {
                        dispatch({
                          type: "ADD_ACTION",
                          data: {
                            eventType,
                            fieldId,
                            value: {
                              type,
                            },
                          },
                        });
                        handleMenuClose();
                      }}
                    >
                      {type}
                    </MenuItem>
                  ))}
                </Menu>
              </div>
            </Stack>
            <div>
              {events
                .find((event) => event.type === eventType)
                ?.actions.map((action, index) => {
                  const ActionComponent = actionComp[action.type];
                  return (
                    <ActionComponent
                      //TODO: better way to make this unique
                      key={action.type + index}
                      fieldId={fieldId}
                      eventType={eventType}
                      dispatch={dispatch}
                      index={index}
                      currentAction={action}
                    />
                  );
                })}
            </div>
          </Stack>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => handleClose(null)}>Close</Button>
      </DialogActions>
    </Dialog>
  );
}
