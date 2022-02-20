import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0F6FB1",
    },
  },
  typography: {
    fontFamily: "Poppins, sans-serif",

    button: {
      textTransform: "capitalize",
    },
  },
  components: {
    MuiTextField: {
      defaultProps: {
        autoComplete: "off",
      },
    },
  },
});

export default theme;
