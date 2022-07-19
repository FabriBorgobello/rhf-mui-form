import {
  Checkbox,
  FormControl,
  FormControlLabel,
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
    </FormControl>
  );
};

export default MuiSingleCheckbox;
