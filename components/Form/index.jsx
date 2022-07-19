import { Box, Button, Divider, Stack } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import MuiAutocomplete from "../Autocomplete";
import MuiMultipleCheckbox from "../MultipleCheckbox";
import MuiRadioButtons from "../RadioButtons";
import MuiRating from "../Rating";
import MuiSelect from "../Select";
import MuiSingleCheckbox from "../SingleCheckbox";
import MuiSwitch from "../Switch";
import MuiTextField from "../TextField";
import { defaultValues, validationSchema } from "./utils";
import { yupResolver } from "@hookform/resolvers/yup";

const Form = () => {
  const methods = useForm({
    defaultValues,
    resolver: yupResolver(validationSchema),
  });
  const onSubmit = (data) => console.log(data);

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Stack spacing={4}>
          <MuiTextField />
          <MuiSelect />
          <MuiSingleCheckbox />
          <MuiMultipleCheckbox />
          <MuiRadioButtons />
          <MuiAutocomplete />
          <MuiRating />
          <MuiSwitch />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Submit
          </Button>
        </Stack>
      </form>
      <Divider sx={{ margin: "1rem 0" }} />
      <pre
        style={{ backgroundColor: "rgba(0, 255, 0, 0.05)", padding: "1rem" }}
      >
        {JSON.stringify(methods.watch(), null, 2)}
      </pre>
      <pre
        style={{ backgroundColor: "rgba(255, 0, 0, 0.05)", padding: "1rem" }}
      >
        {JSON.stringify(methods.formState.errors, null, 2)}
      </pre>
    </FormProvider>
  );
};

export default Form;
