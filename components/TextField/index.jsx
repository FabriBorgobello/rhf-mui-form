import { TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

const MuiTextField = () => {
  const methods = useFormContext();

  return (
    <Controller
      name="text-field-test"
      control={methods.control}
      render={({ field }) => <TextField {...field} label="Text field" />}
    />
  );
};

export default MuiTextField;
