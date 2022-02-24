import React, { Children } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { IconButton, Stack, TextField, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { JsonContext } from '../../../context/JsonContext';
import DeleteIcon from '@mui/icons-material/Delete';
import { CommentsDisabledOutlined, IndeterminateCheckBoxSharp } from '@mui/icons-material';
const empty = { internalName: "", displayName: "" }

export default function ListValuesModal({ open, handleClose = () => { } }) {

  const { state, dispatch } = React.useContext(JsonContext)
  const { listValues = {} } = state.pages[state.currentPage].fields.find(({ fieldId }) => fieldId === state.currentField) ?? {}

  const [lv, setLV] = React.useState(listValues.values ?? [])

  const addListValue = () => {
    setLV(lv => ([...lv, { ...empty }]))
  }

  // const removeListValue = (index) => {
  //   console.log(index, lv)
  //   const _lv = [...lv]
  //   _lv.splice(index, 1);
  //   setLV(_lv)
  // }

  const removeEmptyValues = () => {
    const _lv = []
    lv.forEach(({ internalName, displayName }) => {
      if (internalName && displayName) _lv.push({
        internalName,
        displayName
      })
    })

    setLV(_lv)
    return _lv;
  }

  const updateListValues = () => {


    dispatch({
      type: "UPDATE_COMMON",
      data: {
        key: "listValues",
        value: {
          values: removeEmptyValues()
        }
      }
    })
    handleClose(null);
  }

  return (
    <Dialog
      open={open}
      // onClose={handleClose}
      scroll="paper"
    >
      <DialogTitle id="scroll-dialog-title">
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Typography>List Values</Typography>
          <IconButton onClick={() => handleClose(null)}>
            <CloseIcon />
          </IconButton>
        </Stack>
      </DialogTitle>
      <DialogContent dividers>
        <DialogContentText
          id="scroll-dialog-description"
        >
          <Stack gap={2}>
            <Stack direction="row" gap={2}>
              <Typography flex="1">Internal Name</Typography>
              <Typography flex="1">Display Name</Typography>
            </Stack>
            {
              // Children.toArray(
              lv.map(({ internalName, displayName }, index) => {
                return <Stack direction="row" gap={2} key={index}>
                  <TextField size="small" defaultValue={internalName} />
                  <TextField size="small" defaultValue={displayName} />
                  {/* <IconButton onClick={() => removeListValue(index)}>
                      <DeleteIcon fontSize="small" color="error" />
                    </IconButton> */}
                </Stack>
              })
              // )
            }
            <Button
              size="small"
              variant="contained"
              sx={{
                alignSelf: "end"
              }}
              onClick={addListValue}
            >Add Value</Button>
          </Stack>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={updateListValues}>Save</Button>
      </DialogActions>
    </Dialog>
  );
}
