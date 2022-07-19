import { Box, FormLabel, Rating } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

const MuiRating = () => {
  const methods = useFormContext();

  return (
    <Controller
      name="rating-test"
      control={methods.control}
      render={({ field: { value, onChange, name } }) => (
        <Box display="flex" flexDirection="column">
          <FormLabel id={`${name}-label`}>Rating</FormLabel>
          <Rating
            aria-labelledby={`${name}-label`}
            name={name}
            value={value}
            onChange={(_, newValue) => onChange(newValue)}
          />
        </Box>
      )}
    />
  );
};

export default MuiRating;
