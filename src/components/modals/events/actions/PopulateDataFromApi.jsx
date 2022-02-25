import {
  Add,
  Cancel,
} from "@mui/icons-material";
import {
  Button,
  IconButton,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

import ActionAccordion from "./ActionAccordion"

import { omit } from "lodash"

const types = ["None", "formFieldId"];

const StateToJson = (arr) => {
  return arr.reduce((acc, obj) => (
    {
      ...acc, [obj.name]: {
        ...omit(obj, ["name"])
      }
    }
  ), {})
}

const structure = ({ sourceToTargetFieldIdsMapping, name, params }) => ({
  type: "populateDataFromApi",
  data: {
    sourceToTargetFieldIdsMapping: StateToJson(sourceToTargetFieldIdsMapping),
    apiDetails: {
      name,
      params,
    },
  },
});

const JsonToState = (json = { name: { targetId: "", targetValues: [] } }) => {
  return Object.entries(json)?.reduce((acc, [key, val]) =>
    [...acc, { ...val, name: key }]
    , [])
}

const PopulateDataFromApi = ({ index, fieldId, currentAction, dispatch, eventType }) => {
  const [json, setJson] = useState({
    sourceToTargetFieldIdsMapping:
      JsonToState(currentAction?.data?.sourceToTargetFieldIdsMapping),
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

  const updateSourceMap = (event, index, tag) => {
    const _json = {
      ...json,
      sourceToTargetFieldIdsMapping: [...json.sourceToTargetFieldIdsMapping]
    }

    if (tag === "targetValues") {
      _json.sourceToTargetFieldIdsMapping[index][tag] = event.target.value.split(",");
    } else {
      _json.sourceToTargetFieldIdsMapping[index][tag] = event.target.value;
    }

    setJson(_json)
  }

  const removeSourceMap = (name) => {
    const _json = {
      ...json,
      sourceToTargetFieldIdsMapping: json.sourceToTargetFieldIdsMapping.filter((param) => param.name !== name),
    };

    setJson(_json);
  }

  const addSourceMap = () => {
    setJson({
      ...json,
      sourceToTargetFieldIdsMapping: [...json.sourceToTargetFieldIdsMapping, { name: "", targetId: "", targetValues: [] }],
    });
  }

  const saveAction = () => {
    dispatch({
      type: "UPDATE_ACTION",
      data: {
        eventType,
        fieldId,
        index,
        value: structure(json),
      },
    });
  };

  return (
    <ActionAccordion
      index={index}
      actionType="populateDataFromApi"
      saveAction={saveAction}
      eventType={eventType}
      fieldId={fieldId}
      dispatch={dispatch}
    >
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
        <Typography>sourceToTargetFieldIdsMapping:</Typography>
        {
          json.sourceToTargetFieldIdsMapping.map((object, i) => (
            <Stack direction="row" gap={1} key={i}>
              <TextField
                sx={{ flex: 1 }}
                size="small"
                label="Name"
                value={object.name}
                onChange={(event) => updateSourceMap(event, i, "name")}
              />
              <TextField
                sx={{ flex: 1 }}
                size="small"
                label="TargetId"
                value={object.targetId}
                onChange={(event) => updateSourceMap(event, i, "targetId")}
              />
              <TextField
                sx={{ flex: 1 }}
                size="small"
                label="Target Values"
                value={object.targetValues?.join(",") ?? ""}
                onChange={(event) => updateSourceMap(event, i, "targetValues")}
              >
              </TextField>
              <IconButton
                color="error"
                style={{
                  flexBasis: 40,
                }}
                onClick={() => removeSourceMap(object.name)}
              >
                <Cancel fontSize="small" />
              </IconButton>
            </Stack>
          ))
        }
        <Button
          sx={{
            alignSelf: "end",
          }}
          size="small"
          variant="contained"
          startIcon={<Add />}
          onClick={addSourceMap}
        >
          Add Source Map
        </Button>
        <pre>{JSON.stringify(json, null, 2)}</pre>
      </Stack>
    </ActionAccordion>
  );
};

export default PopulateDataFromApi;
