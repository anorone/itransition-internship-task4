import { TextField } from '@mui/material';

function TextInput() {
  return (
    <TextField
      id="username"
      name="username"
      label="Username"
      variant="filled"
      required
    />
  );
};

export default TextInput;
