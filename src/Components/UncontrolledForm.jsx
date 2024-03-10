import { useRef } from 'react';

const UncontrolledForm = ({ formStyle }) => {
  const inputRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleReset = () => {
    inputRef.current.value = '';
  };

  return (
    <>
      <h1>UncontrolledForm</h1>
      <form onSubmit={handleSubmit} style={formStyle}>
        <label>
          Enter something:
          <input type="text" ref={inputRef} />
        </label>
        <button type="submit">Submit</button>
        <button type="button" onClick={handleReset}>
          Reset
        </button>
      </form>
    </>
  );
};

export default UncontrolledForm;
