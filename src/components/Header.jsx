import { AppBar, Box, Toolbar, Typography, Button } from "@mui/material";
import { isNull, pick } from "lodash";
import { useContext } from "react";
import { JsonContext } from "../context/JsonContext";
const copyJson = () => {
  const json = pick(window.currentJson, ["pages"]);
  navigator.clipboard.writeText(JSON.stringify(json, null, 2));
};

const Header = () => {
  const { state } = useContext(JsonContext);
  // TODO: update state
  const importJson = () => {};
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" elevation={0}>
        <Toolbar variant="dense">
          <Typography component="div" sx={{ flexGrow: 1 }}>
            Form Json Editor -{" "}
            {!isNull(state.currentPage)
              ? state.pages[state.currentPage].title
              : "No Page Added"}
          </Typography>
          <Button color="inherit" onClick={importJson}>
            Import Json
          </Button>
          <Button color="inherit" onClick={copyJson}>
            Export Json
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
