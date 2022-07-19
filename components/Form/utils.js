import * as yup from "yup";

const ERROR_MESSAGES = {
  required: "This field is required",
};

export const defaultValues = {
  "text-field-test": "",
  "select-test": "",
  "single-checkbox-test": false,
  "multiple-checkbox-test": [],
  "radio-buttons-test": null,
  "autocomplete-test": null,
  "rating-test": null,
  "switch-test": false,
};

export const validationSchema = yup.object({
  "text-field-test": yup.string().required(ERROR_MESSAGES.required),
  "select-test": yup.string().required(ERROR_MESSAGES.required),
  "single-checkbox-test": yup
    .boolean()
    .test(
      "single-checkbox-test",
      "This field is required",
      (value) => value === true
    ),
  "multiple-checkbox-test": yup
    .array()
    .required(ERROR_MESSAGES.required)
    .test(
      "at-least-one-checked",
      "At least one option must be checked",
      (value) => value.length > 0
    ),
  "radio-buttons-test": yup
    .string()
    .nullable()
    .required(ERROR_MESSAGES.required),
  "autocomplete-test": yup
    .object({
      label: yup.string().required(ERROR_MESSAGES.required),
      value: yup.string().required(ERROR_MESSAGES.required),
    })
    .nullable()
    .required(ERROR_MESSAGES.required),
  "rating-test": yup
    .number()
    .typeError("Please enter a valid number")
    .nullable()
    .required(ERROR_MESSAGES.required),
  "switch-test": yup
    .boolean()
    .test("switch-test", ERROR_MESSAGES.required, (value) => value === true),
});
