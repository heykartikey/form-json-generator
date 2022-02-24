import { OpenInNew } from "@mui/icons-material";
import { AppBar, Box, Toolbar, Typography, Button } from "@mui/material";
import { isNull, pick } from "lodash";
import { useContext } from "react";
import { JsonContext } from "../context/JsonContext";

const Header = () => {
  const { state } = useContext(JsonContext);

  const exportJson = () => {
    const data = new Blob([JSON.stringify(pick(state, ["pages"]), null, 2)], {
      type: "text/json",
    });

    window.open(window.URL.createObjectURL(data));
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar variant="dense">
          <Typography component="div" sx={{ flexGrow: 1 }}>
            Form Json Editor -{" "}
            {!isNull(state.currentPage)
              ? state.pages[state.currentPage].title
              : "No Page Added"}
          </Typography>
          <Button color="inherit">Import Json</Button>
          <Button color="inherit" onClick={exportJson} endIcon={<OpenInNew />}>
            Export
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
