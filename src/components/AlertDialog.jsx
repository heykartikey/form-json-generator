import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

const AlertDialog = ({ alertType, setAlertType, handleAgree }) => {
  const handleClose = () => {
    setAlertType("");
  };

  return (
    <Dialog open={!!alertType} onClose={handleClose}>
      <DialogTitle>Delete {alertType}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Are you sure you want to delete this {alertType.toLowerCase()}?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button color="error" onClick={handleAgree}>
          Yes, Delete!
        </Button>
        <Button autoFocus onClick={handleClose}>
          No, Keep it!
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AlertDialog;
