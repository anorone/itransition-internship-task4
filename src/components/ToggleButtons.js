import { ButtonGroup, Button } from '@mui/material';

function ToggleButtons() {
  return (
    <div className="btn-group">
      <ButtonGroup variant="text" aria-label="text button group">
        <Button>Log in</Button>
        <Button>Sign up</Button>
      </ButtonGroup>
    </div>
  );
}

export default ToggleButtons;
