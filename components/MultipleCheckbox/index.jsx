import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
} from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

const MuiMultipleCheckbox = () => {
  const methods = useFormContext();

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Multiple checkbox</FormLabel>
      <FormGroup aria-label="multiple-checkbox">
        {OPTIONS.map((option) => (
          <FormControlLabel
            key={option.value}
            control={
              <Controller
                name={`multiple-checkbox-test`}
                control={methods.control}
                render={({ field: { value, onChange } }) => (
                  <Checkbox
                    checked={value.includes(option.value)}
                    onChange={(e) =>
                      onChange(
                        e.target.checked
                          ? [...value, option.value]
                          : value.filter((value) => value !== option.value)
                      )
                    }
                  />
                )}
              />
            }
            label={option.label}
          />
        ))}
      </FormGroup>
      <FormHelperText
        error={methods?.formState?.errors?.["multiple-checkbox-test"]?.message}
      >
        {methods.formState.errors?.["multiple-checkbox-test"]?.message}
      </FormHelperText>
    </FormControl>
  );
};

const OPTIONS = [
  { label: "Basketball", value: "basketball" },
  { label: "Football", value: "football" },
  { label: "Ping pong", value: "ping-pong" },
];

export default MuiMultipleCheckbox;
