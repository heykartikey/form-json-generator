export const defaultField = {
  title: "",
  viewType: "text",
  fieldId: "",
  value: "",
  placeholder: "",
  visible: true,
  enabled: true,
  alignment: {
    col: 6,
    row: "new",
    horizontal: "center",
    variant: "outlined",
  },
  validation: {
    required: true,
    error: "",
    contentValidation: "",
    lengthValidation: {},
    dateValidation: {},
  },
  events: {},
};

export const defaultPage = {
  alignment: {
    width: "65%",
    vertical: "top",
  },
  fields: [],
};

export const defaultState = {
  pages: [],
  currentPage: null,
  currentField: null,
};
