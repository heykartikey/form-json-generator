import { useContext } from "react";
import { Grid, Stack } from "@mui/material";
import { JsonContext } from "../context/JsonContext";

import FieldHandler from "./FieldHandler";
import { isNull } from "lodash";

const FormVisualizer = () => {
  const { state } = useContext(JsonContext);

  if (isNull(state.currentPage)) return null;

  const page = state.pages.at(state.currentPage);

  // let rows = [];
  // let currentRow = -1;

  // fields?.forEach((field) => {
  //   if (field.visible === true) {
  //     if (field?.alignment?.row !== "new") {
  //       rows[currentRow]?.fields.push(field);
  //     } else {
  //       currentRow += 1;
  //       rows.push({
  //         alignment: { ...field.alignment },
  //         fields: [field],
  //       });
  //     }
  //   }
  // });

  return (
    <Grid container spacing={3} width={page.alignment.width}>
      {page.fields?.map((field) => (
        <FieldHandler key={field.fieldId} field={field} />
      ))}
    </Grid>
  );
};

export default FormVisualizer;
