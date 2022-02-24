import { Box, CssBaseline, Stack } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme";
import FormVisualizer from "./FormVisualizer";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Editor = () => {
  return (
    <>
      <Header />
      <Box display="grid" gridTemplateColumns="auto 300px">
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <FormVisualizer />
        </ThemeProvider>
        <Sidebar />
      </Box>
    </>
  );
};

export default Editor;
