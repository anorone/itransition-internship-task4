import Form from './components/Form.js';
import ToggleButtons from './components/ToggleButtons.js';
// import AdminPanel from './components/AdminPanel.js';

function App() {
  return (
    <section className="app">
      <h1 className="sr-only">Admin Panel</h1>
      <div className="box">
        <Form purpose="Sign up" />
        <Form purpose="Log in" />
      </div>
      <ToggleButtons />
      {/* <AdminPanel hidden={true} /> */}
    </section>
  );
}

export default App;
