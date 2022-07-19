import {
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
  Switch,
} from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

const MuiSwitch = () => {
  const methods = useFormContext();

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Would you like some dinner?</FormLabel>
      <FormGroup>
        <FormControlLabel
          control={
            <Controller
              name="switch-test"
              control={methods.control}
              render={({ field }) => <Switch {...field} />}
            />
          }
          label="Yes, I want dinner"
        />
      </FormGroup>
      <FormHelperText
        error={methods?.formState?.errors?.["switch-test"]?.message}
      >
        {methods.formState.errors?.["switch-test"]?.message}
      </FormHelperText>
    </FormControl>
  );
};

export default MuiSwitch;
