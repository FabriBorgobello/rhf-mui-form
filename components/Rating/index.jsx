import { FormControl, FormHelperText, FormLabel, Rating } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

const MuiRating = () => {
  const methods = useFormContext();

  return (
    <Controller
      name="rating-test"
      control={methods.control}
      render={({ field: { value, onChange, name } }) => (
        <FormControl component="fieldset">
          <FormLabel id={`${name}-label`}>Rating</FormLabel>
          <Rating
            aria-labelledby={`${name}-label`}
            name={name}
            value={value}
            onChange={(_, newValue) => onChange(newValue)}
          />
          <FormHelperText error={methods?.formState?.errors?.[name]?.message}>
            {methods.formState.errors?.[name]?.message}
          </FormHelperText>
        </FormControl>
      )}
    />
  );
};

export default MuiRating;
