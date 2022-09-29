import TextInput from './TextInput.js';
import PasswordInput from './PasswordInput.js';

function Form({ heading }) {
  return (
    <form>
      <h2 className="heading">{heading}</h2>
      <TextInput />
      <PasswordInput />
    </form>
  );
}

export default Form;