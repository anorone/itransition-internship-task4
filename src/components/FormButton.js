import { Button } from '@mui/material';

function FormButton({ text }) {
  return (
    <Button
      variant="outlined"
      size="large"
      sx={{ height: 50, fontSize: 16 }}
    >
      {text}
    </Button>
  );
}

export default FormButton;
