import './css/App.css';
import Logo from "./components/Logo.js"
import Form from "./components/Form.js"
import Notes from "./components/Notes.js"

function App() {
  return (
    <div className="app-container">
      <Logo />
      <Form />
      <Notes />
    </div>
  );
}

export default App;
