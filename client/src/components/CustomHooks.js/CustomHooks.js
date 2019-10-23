import { useState } from 'react';

const useEntryForm = callback => {
  const [inputs, setInputs] = useState({});

  const handleSubmit = e => {
    if (e) {
      e.preventDefault();
    }
    callback();
  };

  const handleInput = e => {
    e.persist();
    setInputs(inputs => ({
      ...inputs,
      [e.target.name]: [e.target.value]
    }));
  };

  return {
    handleSubmit,
    handleInput,
    inputs
  };
};

export default useEntryForm;
