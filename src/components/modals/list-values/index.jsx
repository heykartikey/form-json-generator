import { useState, useContext } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import { JsonContext } from "../../../context/JsonContext";
import { Close } from "@mui/icons-material";

const empty = { internalName: "", displayName: "" };

export default function ListValuesModal({
  open,
  fieldId,
  handleClose = () => {},
}) {
  const { state, dispatch } = useContext(JsonContext);
  const { listValues = {} } =
    state.pages[state.currentPage].fields.find(
      (field) => fieldId === field.fieldId
    ) ?? {};

  console.log("Field Id: ", fieldId);

  const [lv, setLV] = useState(listValues.values ?? [{ ...empty }]);

  const addListValue = () => {
    setLV((lv) => [...lv, { ...empty }]);
  };

  const removeEmptyValues = () => {
    const _lv = [];
    lv.forEach(({ internalName, displayName }) => {
      if (internalName && displayName) {
        _lv.push({
          internalName,
          displayName,
        });
      }
    });

    return _lv;
  };

  const updateValue = (event, index, tag) => {
    const _lv = [...lv];
    _lv[index][tag] = event.target.value;
    setLV(_lv);
  };

  const updateListValues = () => {
    handleClose(null);

    const values = removeEmptyValues();
    setLV(values);

    dispatch({
      type: "UPDATE_COMMON",
      data: {
        fieldId,
        key: "listValues",
        value: {
          values,
        },
      },
    });
  };

  return (
    <Dialog open={open} scroll="paper">
      <DialogTitle id="scroll-dialog-title">
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          List Values
          <IconButton onClick={() => handleClose(null)}>
            <Close />
          </IconButton>
        </Stack>
      </DialogTitle>
      <DialogContent dividers>
        <DialogContentText id="scroll-dialog-description">
          <Stack gap={2}>
            <Stack direction="row" gap={2}>
              <Typography flex="1">Internal Name</Typography>
              <Typography flex="1">Display Name</Typography>
            </Stack>
            {lv?.map(({ internalName, displayName }, index) => (
              <Stack direction="row" gap={2} key={index}>
                <TextField
                  size="small"
                  value={internalName}
                  onChange={(event) =>
                    updateValue(event, index, "internalName")
                  }
                />
                <TextField
                  size="small"
                  value={displayName}
                  onChange={(event) => updateValue(event, index, "displayName")}
                />
              </Stack>
            ))}
            <Button
              size="small"
              variant="contained"
              sx={{
                alignSelf: "end",
              }}
              onClick={addListValue}
            >
              Add Value
            </Button>
          </Stack>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={updateListValues}>Save</Button>
      </DialogActions>
    </Dialog>
  );
}
