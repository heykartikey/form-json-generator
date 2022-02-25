import {
  Add,
  Cancel,
  Expand,
  ExpandMore,
  ExpandSharp,
} from "@mui/icons-material";
import {
  Accordion,
  AccordionActions,
  AccordionDetails,
  AccordionSummary,
  Button,
  IconButton,
  ListItemText,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

const types = ["None", "formFieldId"];

const structure = ({ sourceToTargetFieldIdsMapping, name, params }) => ({
  type: "populateDataFromApi",
  data: {
    sourceToTargetFieldIdsMapping,
    apiDetails: {
      name,
      params,
    },
  },
});

const PopulateDataFromApi = ({ currentAction, dispatch, eventType }) => {
  const [json, setJson] = useState({
    sourceToTargetFieldIdsMapping:
      currentAction?.data?.sourceToTargetFieldIdsMapping ?? {},
    name: currentAction?.data?.apiDetails?.page ?? "",
    params: currentAction?.data?.apiDetails?.params ?? [
      {
        name: "",
        value: "",
      },
    ],
  });

  const updateApiDetails = (event) => {
    setJson({
      ...json,
      name: event.target.value,
    });
  };

  const addParam = () => {
    setJson({
      ...json,
      params: [...json.params, { name: "", value: "" }],
    });
  };

  const updateParams = (event, index, tag) => {
    const _json = {
      ...json,
      params: [...json.params],
    };

    if (tag === "type") {
      _json.params[index][tag] =
        event.target.value === "None" ? undefined : event.target.value;
    } else {
      _json.params[index][tag] = event.target.value;
    }

    setJson(_json);
  };

  const removeParam = (name) => {
    const _json = {
      ...json,
      params: json.params.filter((param) => param.name !== name),
    };

    setJson(_json);
  };

  const updateAction = () => {
    dispatch({
      type: "UPDATE_ACTION",
      data: {
        eventType,
        fieldId,
        value: structure(json),
      },
    });
  };

  return (
    <Accordion
      disableGutters
      square
      elevation={0}
      sx={{
        ":before": {
          display: "none",
        },
        border: "1px solid rgba(0, 0, 0, .125)",
        // borderBottom: "none",
      }}
    >
      <AccordionSummary expandIcon={<ExpandMore />}>
        <Stack direction="row" gap={1} alignItems="center">
          <Typography variant="subtitle1">Action #1:</Typography>
          <Typography variant="subtitle2">populateDataFromApi</Typography>
        </Stack>
      </AccordionSummary>
      <AccordionDetails>
        <Stack spacing={2}>
          <Typography>API Details: </Typography>
          <TextField
            size="small"
            label="API Url"
            value={json.name}
            onChange={updateApiDetails}
          />
          <Typography>Params: </Typography>
          {json.params.map((param, i) => (
            <Stack direction="row" gap={1} key={i}>
              <TextField
                sx={{ flex: 1 }}
                size="small"
                label="Name"
                value={param.name}
                onChange={(event) => updateParams(event, i, "name")}
              />
              <TextField
                sx={{ flex: 1 }}
                size="small"
                label="Value"
                value={param.value}
                onChange={(event) => updateParams(event, i, "value")}
              />
              <TextField
                sx={{ flex: 1 }}
                select
                size="small"
                label="Type"
                value={param.type ?? "None"}
                onChange={(event) => updateParams(event, i, "type")}
              >
                {types.map((type) => (
                  <MenuItem key={type} value={type}>
                    {type}
                  </MenuItem>
                ))}
              </TextField>
              <IconButton
                color="error"
                style={{
                  flexBasis: 40,
                }}
                onClick={() => removeParam(param.name)}
              >
                <Cancel fontSize="small" />
              </IconButton>
            </Stack>
          ))}
          <Button
            sx={{
              alignSelf: "end",
            }}
            size="small"
            variant="contained"
            startIcon={<Add />}
            onClick={addParam}
          >
            Add Param
          </Button>
          <pre onClick={updateAction}>{JSON.stringify(json, null, 2)}</pre>
        </Stack>
      </AccordionDetails>
      <AccordionActions>
        <Button>Remove</Button>
        <Button>Save</Button>
      </AccordionActions>
    </Accordion>
  );
};

export default PopulateDataFromApi;
