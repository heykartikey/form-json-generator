import { useContext } from "react";
import { Grid } from "@mui/material";
import { JsonContext } from "../context/JsonContext";

import FieldHandler from "./FieldHandler";
import { isNull } from "lodash";

const FormVisualizer = () => {
  const { state } = useContext(JsonContext);

  if (isNull(state.currentPage)) return null;

  const page = state.pages.at(state.currentPage) ?? {};
  const { fields = [] } = page;

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
    <>
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
                      {field.title}
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
              width={page.alignment.width}
            >
              {row.fields.map((field, index) => (
                <FieldHandler key={field.fieldId} field={field} />
              ))}
            </Grid>
          </>
        );
      })}
    </>
  );
};

export default FormVisualizer;
