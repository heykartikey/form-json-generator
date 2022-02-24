import { useContext, useState } from "react";

import {
  Button,
  Stack,
  IconButton,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  TextField,
} from "@mui/material";

import Common from "./common";
import Alignment from "./alignment";
import Validation from "./validation";

import AlertDialog from "./AlertDialog";

import { JsonContext } from "../context/JsonContext";
import { ChevronLeft, Delete, ExpandMore, Settings } from "@mui/icons-material";

import { isNull } from "lodash";

import { PageAlignment } from "../components/page-alignment/PageAlignment";

const Details = ({ value, edit, del, disabled, handleDrag, handleDrop }) => (
  <Stack
    direction="row"
    alignItems="center"
    justifyContent="space-between"
    draggable
    onDragOver={(e) => e.preventDefault()}
    onDragStart={handleDrag}
    onDrop={handleDrop}
    py={1}
    style={{
      cursor: "grab",
    }}
  >
    <Typography noWrap key={value} variant="subtitle2" title={value}>
      {value}
    </Typography>
    <Stack direction="row" gap={1}>
      <IconButton disabled={disabled} size="small" onClick={edit}>
        <Settings fontSize="small" />
      </IconButton>
      <IconButton disabled={disabled} size="small" color="error" onClick={del}>
        <Delete fontSize="small" />
      </IconButton>
    </Stack>
  </Stack>
);

const PagesAccordion = ({ expanded, handleExpand }) => {
  const [dragIndex, setDragIndex] = useState(null);
  const { state, dispatch } = useContext(JsonContext);

  const handleDrag = (index) => {
    setDragIndex(index);
  };

  const handleDrop = (index) => {
    dispatch({
      type: "REORDER_PAGE",
      data: {
        dragIndex,
        dropIndex: index,
      },
    });
  };

  const pages = state.pages;

  const editPage = (index) => {
    dispatch({
      type: "SET_CURRENT_PAGE",
      data: index,
    });
    handleExpand("fields");
  };

  const deletePage = (index) => {
    dispatch({
      type: "DELETE_PAGE",
      data: index,
    });
  };

  return (
    <Accordion
      disableGutters
      square
      elevation={0}
      expanded={expanded}
      onChange={() => handleExpand("pages")}
      sx={{
        ":before": {
          display: "none",
        },
        border: "1px solid rgba(0, 0, 0, .125)",
      }}
    >
      <AccordionSummary expandIcon={<ExpandMore />}>
        <Typography variant="subtitle1">Pages</Typography>
      </AccordionSummary>
      <AccordionDetails>
        {pages.length > 0 ? (
          <Stack>
            {pages.map((page, index) => (
              <Details
                key={index}
                value={page.title}
                edit={() => editPage(index)}
                del={() => deletePage(index)}
                handleDrag={() => handleDrag(index)}
                handleDrop={() => handleDrop(index)}
              />
            ))}
          </Stack>
        ) : (
          <Typography variant="subtitle2" textAlign="center">
            <em>No page has been added yet!</em>
          </Typography>
        )}
      </AccordionDetails>
    </Accordion>
  );
};

const FieldsAccordion = ({ expanded, handleExpand }) => {
  const [dragIndex, setDragIndex] = useState(null);
  const { state, dispatch } = useContext(JsonContext);

  const handleDrag = (index) => {
    setDragIndex(index);
  };

  const handleDrop = (index) => {
    dispatch({
      type: "REORDER_FIELD",
      data: {
        dragIndex,
        dropIndex: index,
      },
    });
  };

  const fields = state.pages[state.currentPage].fields;

  const editField = (fieldId) => {
    dispatch({
      type: "SET_CURRENT_FIELD",
      data: fieldId,
    });
    handleExpand("common");
  };

  const deleteField = (fieldId) => {
    dispatch({
      type: "DELETE_FIELD",
      data: fieldId,
    });
  };

  return (
    <Accordion
      disableGutters
      square
      elevation={0}
      expanded={expanded}
      onChange={() => handleExpand("fields")}
      sx={{
        ":before": {
          display: "none",
        },
        border: "1px solid rgba(0, 0, 0, .125)",
      }}
    >
      <AccordionSummary expandIcon={<ExpandMore />}>
        <Typography variant="subtitle1">Fields</Typography>
      </AccordionSummary>
      <AccordionDetails>
        {fields.length > 0 ? (
          <Stack>
            {fields?.map(({ fieldId }, index) => (
              <Details
                key={fieldId}
                value={fieldId}
                edit={() => editField(fieldId)}
                del={() => deleteField(fieldId)}
                handleDrag={() => handleDrag(index)}
                handleDrop={() => handleDrop(index)}
              />
            ))}
          </Stack>
        ) : (
          <Typography variant="subtitle2" textAlign="center">
            <em>No fields has been added yet!</em>
          </Typography>
        )}
      </AccordionDetails>
    </Accordion>
  );
};

const Sidebar = () => {
  const { state, dispatch } = useContext(JsonContext);

  const [expanded, setExpanded] = useState("common");
  const handleExpand = (panel) => setExpanded(expanded === panel ? "" : panel);

  const [alertType, setAlertType] = useState("");

  const addField = () => {
    dispatch({
      type: "ADD_FIELD",
    });
  };

  const addPage = () => {
    dispatch({
      type: "ADD_PAGE",
    });
  };

  const handleAlertAgree = () => {
    dispatch({
      type: `DELETE_${alertType.toUpperCase()}`,
    });

    setAlertType("");
  };

  const showAllPages = () => {
    dispatch({
      type: "SET_CURRENT_PAGE",
      data: null,
    });
    setExpanded("pages");
  };

  const showAllFields = () => {
    dispatch({
      type: "SET_CURRENT_FIELD",
      data: null,
    });
    setExpanded("fields");
  };
  const handleUpdatePageTitle = (e) => {
    dispatch({
      type: "UPDATE_PAGE_TITLE",
      data: e.target.value,
    });
  };
  const handleUpdatePageId = (e) => {
    dispatch({
      type: "UPDATE_PAGE_ID",
      data: e.target.value,
    });
  };
  return (
    <Stack
      bgcolor="#f1f1f1"
      height="100vh"
      position="fixed"
      right="0"
      width="300px"
      boxShadow="inset 1px 0 0 rgba(0, 0, 0, 0.1)"
    >
      <Stack p={2} direction="row" gap={2}>
        <Button
          disabled={isNull(state.currentPage)}
          variant="contained"
          size="small"
          onClick={isNull(state.currentField) ? showAllPages : showAllFields}
        >
          <ChevronLeft fontSize="small" />
        </Button>
        <Button
          fullWidth
          m={2}
          variant="contained"
          size="small"
          onClick={() => {
            if (isNull(state.currentPage)) {
              addPage();
            } else {
              addField();
            }
          }}
        >
          Add a {isNull(state.currentPage) ? "Page" : "Field"}
        </Button>
      </Stack>
      {isNull(state.currentPage) ? (
        <PagesAccordion
          expanded={expanded === "pages"}
          handleExpand={handleExpand}
          setAlertType={setAlertType}
        />
      ) : isNull(state.currentField) ? (
        <>
          <Stack
            p={2}
            gap={2}
            bgcolor="#fff"
            border="1px solid rgba(0, 0, 0, 0.125)"
            borderBottom="none"
          >
            <TextField
              fullWidth
              size="small"
              label="Page Title"
              value={state.pages[state.currentPage].title}
              onChange={handleUpdatePageTitle}
            />
            <TextField
              fullWidth
              mt={2}
              size="small"
              label="Page ID"
              value={state.pages[state.currentPage].pageId}
              onChange={handleUpdatePageId}
            />
          </Stack>
          <PageAlignment
            expanded={expanded === "pageAlignment"}
            handleExpand={handleExpand}
          />
          <FieldsAccordion
            expanded={expanded === "fields"}
            handleExpand={handleExpand}
          />
        </>
      ) : (
        <Stack>
          <Common
            expanded={expanded === "common"}
            handleExpand={handleExpand}
          />
          <Alignment
            expanded={expanded === "alignment"}
            handleExpand={handleExpand}
          />
          <Validation
            expanded={expanded === "validation"}
            handleExpand={handleExpand}
          />
        </Stack>
      )}
    </Stack>
  );
};

export default Sidebar;
