import ControlledForm from "./Components/ControlledForm";
import FetchingDataComponent from "./Components/FetchingDataComponent";
import UncontrolledForm from "./Components/UncontrolledForm";
import './App.css';

function App() {

  const formStyle = {
    width: '300px',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
  };

  return (
    <div className="App">
      <ControlledForm formStyle={formStyle}/>
      <UncontrolledForm formStyle={formStyle}/>
      <FetchingDataComponent formStyle={formStyle}/>
    </div>
  );
}

export default App;
