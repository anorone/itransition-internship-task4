import TextInput from './TextInput.js';
import PasswordInput from './PasswordInput.js';
import FormButton from './FormButton.js';

function Form({ purpose }) {
  return (
    <form className="entry-form">
      <h2 className="heading">{purpose}</h2>
      <TextInput />
      <PasswordInput />
      <FormButton text={purpose} />
    </form>
  );
}

export default Form;