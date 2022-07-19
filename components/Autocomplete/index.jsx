import { Autocomplete, TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

const MuiAutocomplete = () => {
  const methods = useFormContext();
  return (
    <Controller
      control={methods.control}
      name="autocomplete-test"
      render={({ field: { onChange, name } }) => (
        <Autocomplete
          disablePortal
          id={name}
          options={MOVIES}
          sx={{ width: 300 }}
          onChange={(_, newValue) => onChange(newValue)}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Autocomplete"
              variant="outlined"
              error={methods.formState.errors[name]?.message}
              helperText={methods.formState.errors[name]?.message}
            />
          )}
          isOptionEqualToValue={(option, value) => option.label === value.label}
        />
      )}
    />
  );
};

export default MuiAutocomplete;

const MOVIES = [
  { label: "The Shawshank Redemption", year: 1994 },
  { label: "The Godfather", year: 1972 },
  { label: "The Godfather: Part II", year: 1974 },
  { label: "The Dark Knight", year: 2008 },
  { label: "12 Angry Men", year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: "Pulp Fiction", year: 1994 },
  { label: "Dangal", year: 2016 },
  { label: "The Sting", year: 1973 },
  { label: "2001: A Space Odyssey", year: 1968 },
  { label: "Singin' in the Rain", year: 1952 },
  { label: "Toy Story", year: 1995 },
  { label: "Bicycle Thieves", year: 1948 },
  { label: "The Kid", year: 1921 },
  { label: "Inglourious Basterds", year: 2009 },
  { label: "Snatch", year: 2000 },
  { label: "3 Idiots", year: 2009 },
  { label: "Monty Python and the Holy Grail", year: 1975 },
];
