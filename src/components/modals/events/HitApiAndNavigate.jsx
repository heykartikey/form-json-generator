import { Add, Cancel } from "@mui/icons-material";
import {
  Button,
  IconButton,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import { useState } from "react";

import ActionAccordion from "./actions/ActionAccordion";

const structure = ({ name, page, queryParams }) => ({
  type: "hitApiAndNavigate",
  data: {
    apiDetails: {
      name,
    },
    navigationDetails: {
      page,
      queryParams,
    },
  },
});

const types = ["None", "apiResponse"];

const HitApiAndNavigate = ({
  index,
  fieldId,
  currentAction,
  dispatch,
  eventType,
}) => {
  const [json, setJson] = useState({
    name: currentAction?.data?.apiDetails?.name ?? "",
    page: currentAction?.data?.navigationDetails?.page ?? "",
    queryParams: currentAction?.data?.navigationDetails?.queryParams ?? [
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

  const updatePageRoute = (event) => {
    setJson({
      ...json,
      page: event.target.value,
    });
  };

  const addQueryParam = () => {
    setJson({
      ...json,
      queryParams: [...json.queryParams, { name: "", value: "" }],
    });
  };

  const updateQueryParams = (event, index, tag) => {
    const _json = {
      ...json,
      queryParams: [...json.queryParams],
    };

    if (tag === "type") {
      _json.queryParams[index][tag] =
        event.target.value === "None" ? undefined : event.target.value;
    } else {
      _json.queryParams[index][tag] = event.target.value;
    }

    setJson(_json);
  };

  const removeQueryParam = (name) => {
    const _json = {
      ...json,
      queryParams: json.queryParams.filter(
        (queryParam) => queryParam.name !== name
      ),
    };

    setJson(_json);
  };

  const saveAction = (index) => {
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
      actionType="hitApiAndNavigate"
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
        <Typography>Navigation Details: </Typography>
        <TextField
          size="small"
          label="Page"
          value={json.page}
          onChange={updatePageRoute}
        />
        <Typography>Query Params: </Typography>
        {json.queryParams.map((param, i) => (
          <Stack direction="row" gap={1} key={i}>
            <TextField
              sx={{ flex: 1 }}
              size="small"
              label="Name"
              value={param.name}
              onChange={(event) => updateQueryParams(event, i, "name")}
            />
            <TextField
              sx={{ flex: 1 }}
              size="small"
              label="Value"
              value={param.value}
              onChange={(event) => updateQueryParams(event, i, "value")}
            />
            <TextField
              sx={{ flex: 1 }}
              select
              size="small"
              label="Type"
              value={param.type ?? "None"}
              onChange={(event) => updateQueryParams(event, i, "type")}
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
              onClick={() => removeQueryParam(param.name)}
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
          onClick={addQueryParam}
        >
          Add Query Param
        </Button>
      </Stack>
    </ActionAccordion>
  );
};

export default HitApiAndNavigate;
