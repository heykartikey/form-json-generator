import { useState } from "react";
import { Menu, MenuItem } from "@mui/material";

const ContextMenu = ({ fieldId, children }) => {
  const [contextMenu, setContextMenu] = useState(null);

  const handleContextMenu = (event) => {
    event.preventDefault();
    setContextMenu(
      contextMenu === null
        ? {
            mouseX: event.clientX - 2,
            mouseY: event.clientY - 4,
          }
        : null
    );
  };

  const handleClose = () => {
    setContextMenu(null);
  };

  return (
    <div onContextMenu={handleContextMenu} style={{ cursor: "context-menu" }}>
      {children}
      <Menu
        open={contextMenu !== null}
        onClose={handleClose}
        anchorReference="anchorPosition"
        anchorPosition={
          contextMenu !== null
            ? { top: contextMenu.mouseY, left: contextMenu.mouseX }
            : undefined
        }
      >
        <MenuItem onClick={handleClose}>Add List Values</MenuItem>
        <MenuItem onClick={handleClose}>Add/Edit Events</MenuItem>
        {/* <MenuItem onClick={handleClose}>EntryLimitReached</MenuItem> */}
      </Menu>
    </div>
  );
};

export default ContextMenu;
