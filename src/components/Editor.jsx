import { Box, CssBaseline, Stack } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme";
import FormVisualizer from "./FormVisualizer";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Editor = () => {
  return (
    <Stack>
      <Header />
      <Box
        display="grid"
        gridTemplateColumns="auto 300px"
        maxHeight="100vh"
        height={1}
      >
        <Stack alignItems="center" maxHeight="100vh" overflow="overlay" pt={7}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <FormVisualizer />
          </ThemeProvider>
        </Stack>
        <Sidebar />
      </Box>
    </Stack>
  );
};

export default Editor;
