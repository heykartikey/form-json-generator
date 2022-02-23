import { Grid, Button } from "@mui/material";

export const FormButton = ({ field, onClick }) => {
  const {
    title,
    enabled,
    alignment: { horizontal, variant },
  } = field;

  return (
    <Grid container justifyContent={horizontal}>
      <Grid item>
        <Button variant={variant} disabled={!enabled} onClick={onClick}>
          {title}
        </Button>
      </Grid>
    </Grid>
  );
};

export default FormButton;
