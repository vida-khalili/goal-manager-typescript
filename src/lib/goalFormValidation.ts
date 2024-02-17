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
});

export default goalFormValidation;
