import * as yup from "yup";

const goalFormValidation = yup.object().shape({
  title: yup
    .string()
    .min(2, "Title should have at least 2 letters")
    .required("Title is required"),
  summary: yup
    .string()
    .min(2, "Title should have at least 2 letters")
    .required("Title is required"),
  progress: yup
    .number()
    .min(0, "Minimum value is 0")
    .max(100, "Maximum value is 100"),
  deadline: yup.boolean(),
  endDateValue: yup.date(),
});

export default goalFormValidation;
