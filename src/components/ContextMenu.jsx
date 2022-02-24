import { useState } from "react";
import {
  Divider,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import ListValuesModal from "./modals/list-values";
import EventActionModal from './modals/events/EventActionModal';
import { Add, Delete, ListAlt } from "@mui/icons-material";

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

  const deleteField = () => {
    handleClose();
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
              <ListItemIcon>
                <ListAlt />
              </ListItemIcon>
              <ListItemText
                primary="List Values"
                secondary="Add or Edit List Values"
              />
            </MenuItem>
          )}
          <MenuItem onClick={() => openModal("events")}>
            <ListItemIcon>
              <Add />
            </ListItemIcon>
            <ListItemText primary="Events" secondary="Add or Edit Events" />
          </MenuItem>
          {/* <Divider />
          <MenuItem onClick={deleteField}>
            <ListItemIcon>
              <Delete />
            </ListItemIcon>
            <ListItemText primary="Delete" secondary="Delete this field?" />
          </MenuItem> */}
        </Menu>
      </div>
      {showListValues && (
        <ListValuesModal
          open={modalOpen === "listValues"}
          handleClose={setModalOpen}
          fieldId={fieldId}
        />
      )}
      {
        <EventActionModal open={modalOpen === "events"} handleClose={setModalOpen} fieldId={fieldId} />
      }
    </>
  );
};

export default ContextMenu;
