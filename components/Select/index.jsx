import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

const MuiSelect = () => {
  const methods = useFormContext();

  return (
    <Controller
      name="select-test"
      control={methods.control}
      render={({ field: { value, onChange, name } }) => (
        <FormControl variant="outlined">
          <InputLabel id={`${name}-label`}>Select</InputLabel>
          <Select
            labelId={`${name}-label`}
            id={name}
            value={value}
            onChange={onChange}
            label="Select"
          >
            {OPTIONS.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}
    />
  );
};

const OPTIONS = [
  { label: "American dollar", value: "USD" },
  { label: "Euro", value: "EUR" },
  { label: "British pound", value: "GBP" },
  { label: "Japanese yen", value: "JPY" },
];

export default MuiSelect;
