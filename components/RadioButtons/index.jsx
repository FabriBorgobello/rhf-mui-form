import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

const MuiRadioButtons = () => {
  const methods = useFormContext();

  return (
    <Controller
      name="radio-buttons-test"
      control={methods.control}
      render={({ field: { value, onChange, name } }) => (
        <FormControl>
          <FormLabel id={`${name}-label`}>Radio buttons</FormLabel>
          <RadioGroup
            aria-labelledby={`${name}-label`}
            name={name}
            value={value}
            onChange={onChange}
          >
            {OPTIONS.map((option) => (
              <FormControlLabel
                key={option.value}
                value={option.value}
                control={<Radio color="primary" value={option.value} />}
                label={option.label}
              />
            ))}
          </RadioGroup>
        </FormControl>
      )}
    />
  );
};

const OPTIONS = [
  { label: "+18", value: "adult" },
  { label: "16 - 18", value: "teen" },
  { label: "-16", value: "child" },
];

export default MuiRadioButtons;
