import { useState } from 'react';

const ControlledForm = ({ formStyle }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleReset = () => {
    setInputValue('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <h1>ControlledForm</h1>
      <form onSubmit={handleSubmit} style={formStyle}>
        <label>
          Enter something:
          <input type="text" value={inputValue} onChange={handleInputChange} />
        </label>
        <button type="submit">Submit</button>
        <button type="button" onClick={handleReset}>
          Reset
        </button>
      </form>
    </>
  );
};

export default ControlledForm;
