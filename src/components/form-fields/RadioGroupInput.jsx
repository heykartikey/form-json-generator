import _ from "lodash";
import { Grid, Typography, FormHelperText } from "@mui/material";
import { makeStyles } from "@mui/material/styles";
import clsx from "clsx";
// import ReactHtmlParser from "react-html-parser";

// const useStyles = makeStyles((theme) => ({
//   divBorder: {
//     border: "1px solid #979797",
//     borderRadius: "4px",
//     display: "flex",
//     padding: "5px 8px",
//     alignItems: "center",
//     justifyContent: "center",
//     cursor: "pointer",
//     "& span": {
//       color: "#0F2972",
//       [theme.breakpoints.up("sm")]: {
//         fontSize: "1rem",
//       },
//       [theme.breakpoints.down("sm")]: {
//         fontSize: "1rem",
//       },
//     },

//     "&:hover": {
//       backgroundColor: "#0F2972",

//       "& span": {
//         color: "white",
//         [theme.breakpoints.up("sm")]: {
//           fontSize: "1rem",
//         },
//         [theme.breakpoints.down("sm")]: {
//           fontSize: "1rem",
//         },
//       },
//     },
//   },

//   errorDiv: {
//     border: "1px solid red",
//     "& span": {
//       color: "red",
//       [theme.breakpoints.up("sm")]: {
//         fontSize: "1rem",
//       },
//       [theme.breakpoints.down("sm")]: {
//         fontSize: "1rem",
//       },
//     },
//   },
//   disabledDiv: {
//     border: "1px solid #979797",
//     borderRadius: "4px",
//     display: "flex",
//     padding: "5px 15px",
//     alignItems: "center",
//     justifyContent: "center",
//     cursor: "pointer",
//     "& span": {
//       color: "#979797",
//       [theme.breakpoints.up("sm")]: {
//         fontSize: "1rem",
//       },
//       [theme.breakpoints.down("sm")]: {
//         fontSize: "1rem",
//       },
//     },
//   },
//   activeDiv: {
//     backgroundColor: "#0F2972",

//     "& span": {
//       color: "white !important",
//       [theme.breakpoints.up("sm")]: {
//         fontSize: "1rem",
//       },
//       [theme.breakpoints.down("sm")]: {
//         fontSize: "1rem",
//       },
//     },
//   },
//   blockTypo: {
//     fontSize: "1rem",
//     fontWeight: 300,
//   },
//   uploadDocInputWrapper: {
//     display: "flex",
//     alignItems: "center",
//     "& img": {
//       width: 24,
//       marginRight: 10,
//     },
//   },
// }));

export default function RadioGroupInput({ field }) {

  return (
    <>
      <Grid container>
        {autoCompleteOptions[fieldId]?.map((radioValue, index) => {
          return (
            <Grid
              key={`radio-group-${fieldId}-${index}`}
              item
              style={{ marginRight: 10, minWidth: "3em" }}
            >
              <div

                disabled={!field.enabled}
                // className={clsx({
                //   [classes.divBorder]: field.enabled,
                //   [classes.disabledDiv]: !field.enabled === true,
                //   [classes.activeDiv]:
                //     radioValue.internalName ==
                //     formValues[fieldId]?.internalName,
                //   [classes.errorDiv]: !_.isEmpty(formErrors[fieldId]),
                // })}
              >
                <div>
                  <span>{radioValue.displayName}</span>
                </div>
              </div>
            </Grid>
          );
        })}
      </Grid>

      {formErrors[fieldId] && (
        <Grid item xs={12}>
          <FormHelperText error>{formErrors[fieldId]}</FormHelperText>
        </Grid>
      )}
    </>
  );
}
