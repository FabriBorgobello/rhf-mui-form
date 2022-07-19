import { Box, Button, Divider } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import MuiAutocomplete from "../Autocomplete";
import MuiMultipleCheckbox from "../MultipleCheckbox";
import MuiRadioButtons from "../RadioButtons";
import MuiRating from "../Rating";
import MuiSelect from "../Select";
import MuiSingleCheckbox from "../SingleCheckbox";
import MuiTextField from "../TextField";

const defaultValues = {
  "autocomplete-test": null,
  "single-checkbox-test": false,
  "multiple-checkbox-test": [],
  "radio-buttons-test": {},
  "rating-test": null,
  "select-test": "",
  "text-field-test": "",
};

const Form = () => {
  const methods = useForm({ defaultValues });
  const onSubmit = (data) => console.log(data);

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        style={{ display: "flex", flexDirection: "column", rowGap: "2rem" }}
      >
        <MuiTextField />
        <MuiSelect />
        <MuiSingleCheckbox />
        <MuiMultipleCheckbox />
        <MuiRadioButtons />
        <MuiAutocomplete />
        <MuiRating />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Submit
        </Button>
      </form>
      <Divider sx={{ margin: "1rem 0" }} />
      <pre>{JSON.stringify(methods.watch(), null, 2)}</pre>
    </FormProvider>
  );
};

export default Form;
