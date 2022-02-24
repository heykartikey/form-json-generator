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
    direction: "row",
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
  events: [
    {
      type: "onSelect",
      actions: [],
    },
    { type: "onClick", actions: [] },
    { type: "onSubmit", actions: [] },
    { type: "onEntryLimitReach", entryLimit: 0, actions: [] },
  ],
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
