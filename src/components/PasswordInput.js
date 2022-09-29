import { TextField } from '@mui/material';

function PasswordInput() {
  return (
    <TextField
      id="password"
      name="password"
      label="Password"
      variant="filled"
      type="password"
      required
    />
  );
}

export default PasswordInput;
