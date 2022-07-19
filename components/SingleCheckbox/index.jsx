import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
} from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

const MuiSingleCheckbox = () => {
  const methods = useFormContext();

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Single checkbox</FormLabel>
      <FormControlLabel
        label="I like this form"
        control={
          <Controller
            name={"single-checkbox-test"}
            control={methods.control}
            render={({ field }) => (
              <Checkbox
                {...field}
                checked={field.value}
                onChange={(e) => field.onChange(e.target.checked)}
              />
            )}
          />
        }
      />
      <FormHelperText
        error={methods?.formState?.errors?.["single-checkbox-test"]?.message}
      >
        {methods.formState.errors?.["single-checkbox-test"]?.message}
      </FormHelperText>
    </FormControl>
  );
};

export default MuiSingleCheckbox;
