import Form from './components/Form.js';
import FormButton from './components/FormButton.js';
import AdminPanel from './components/AdminPanel.js';

function App() {
  return (
    <section className="app">
      <h1 className="sr-only">Admin Panel</h1>
      <div className="box">
        <Form heading="Sign up" />
        <Form heading="Log in" />
      </div>
      <div className="btn-group">
        <FormButton text="Sign up"/>
        <FormButton text="Log in"/>
      </div>
      <AdminPanel hidden={true} />
    </section>
  );
}

export default App;
