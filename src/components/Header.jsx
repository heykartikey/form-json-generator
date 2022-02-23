import { memo } from "react";
import { AppBar, Box, Toolbar, Typography, Button } from "@mui/material";
import { pick } from "lodash";
import { useContext } from "react";
import {JsonContext} from '../context/JsonContext'; 
const copyJson = () => {
  const json = pick(window.currentJson, ["pages"]);
  json.pages.forEach((page, index) => {
    page.pageId = page.pageId;
  });

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
            Form Json Editor | {"Title will be updated here when page is added"}
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
