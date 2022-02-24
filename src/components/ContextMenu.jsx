import { useState } from "react";
import { Menu, MenuItem } from "@mui/material";
import ListValuesModal from "./modals/list-values";

const ContextMenu = ({ fieldId, showListValues = false, children }) => {
  const [contextMenu, setContextMenu] = useState(null);
  const [modalOpen, setModalOpen] = useState(null);

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

  const openModal = (modalId) => {
    handleClose();
    setModalOpen(modalId);
  };

  const handleClose = () => {
    setContextMenu(null);
  };

  return (
    <>
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
          {showListValues && (
            <MenuItem onClick={() => openModal("listValues")}>
              Add List Values
            </MenuItem>
          )}
          <MenuItem onClick={() => openModal("events")}>
            Add/Edit Events
          </MenuItem>
        </Menu>
      </div>
      {showListValues && (
        <ListValuesModal
          open={modalOpen === "listValues"}
          handleClose={setModalOpen}
          fieldId={fieldId}
        />
      )}
    </>
  );
};

export default ContextMenu;
