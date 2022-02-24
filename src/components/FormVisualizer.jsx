import { useContext } from "react";
import { Grid, Stack } from "@mui/material";
import { JsonContext } from "../context/JsonContext";

import FieldHandler from "./FieldHandler";
import { isNull, isEmpty } from "lodash";

const FormVisualizer = () => {
  const { state } = useContext(JsonContext);

  if (isNull(state.currentPage))
    return (
      <em
        style={{
          margin: "auto",
        }}
      >
        Select a Page to display its fields
      </em>
    );

  const page = state.pages.at(state.currentPage) ?? {};
  const { fields = [] } = page;

  if (isEmpty(fields))
    return (
      <em
        style={{
          margin: "auto",
        }}
      >
        Add Fields to display them here
      </em>
    );

  let rows = [];
  let currentRow = -1;

  fields.forEach((field) => {
    if (field.visible === true) {
      if (field?.alignment?.row !== "new") {
        rows[currentRow]?.fields.push(field);
      } else {
        currentRow += 1;
        rows.push({
          alignment: { ...field.alignment },
          fields: [field],
        });
      }
    }
  });

  return (
    <Stack p={5} justifyContent={page.alignment.vertical} alignItems="center">
      <div
        style={{
          width: page.alignment.width,
        }}
      >
        {rows.map((row, index) => {
          let justifyContent = "space-between";
          switch (row.alignment?.horizontal) {
            case "start":
              justifyContent = "flex-start";

              break;
            case "end":
              justifyContent = "flex-end";

              break;
          }
          const hasRowRadio = row.fields.filter(
            (field) => field.viewType === "radioGroup"
          );
          let hasRowRadio1 = [];
          let colBeforeradio = 0;
          row.fields.forEach((field) => {
            if (field.viewType === "radioGroup") {
              field.colBeforeradio = colBeforeradio;
              colBeforeradio = 0;
              hasRowRadio1.push(field);
            } else {
              colBeforeradio += field.alignment?.col || 0;
            }
          });
          const direction = row.alignment?.direction || "row";
          console.log("alignmenty", hasRowRadio1);

          return (
            <>
              {hasRowRadio1.length !== 0 && (
                <Grid
                  container
                  direction={direction}
                  justifyContent="flex-start"
                  spacing={3}
                >
                  {hasRowRadio1.map((field, index) => (
                    <>
                      {field.colBeforeradio !== 0 && (
                        <Grid item xs={field.colBeforeradio}></Grid>
                      )}

                      <Grid item xs={field.alignment.col || 6}>
                        {field.title ?? "Radio"}
                      </Grid>
                    </>
                  ))}
                </Grid>
              )}

              <Grid
                container
                style={{ marginBottom: "25px" }}
                direction={direction}
                justifyContent={justifyContent}
                spacing={3}
              >
                {row.fields.map((field, index) => (
                  <FieldHandler key={field.fieldId} field={field} />
                ))}
              </Grid>
            </>
          );
        })}
      </div>
    </Stack>
  );
};

export default FormVisualizer;
