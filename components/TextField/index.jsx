import { TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

const MuiTextField = () => {
  const methods = useFormContext();

  return (
    <Controller
      name="text-field-test"
      control={methods.control}
      render={({ field }) => (
        <TextField
          {...field}
          label="Text field"
          error={methods?.formState?.errors?.["text-field-test"]?.message}
          helperText={methods?.formState?.errors?.["text-field-test"]?.message}
        />
      )}
    />
  );
};

export default MuiTextField;
