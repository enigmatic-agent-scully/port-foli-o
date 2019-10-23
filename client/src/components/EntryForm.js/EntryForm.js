import React from 'react';
import useEntryForm from '../CustomHooks.js/CustomHooks';
import API from './../../utils/api';

const entryForm = () => {
  const submitForm = () => {
    API.createProject(inputs);
    console.log(inputs);
  };

  const { inputs, handleInput, handleSubmit } = useEntryForm(submitForm);
  return (
    <div className='entryForm'>
      <form>
        <label>Project Title</label>
        <input
          type='text'
          placeholder={inputs.title}
          name='title'
          value={inputs.title}
          onChange={handleInput}
        />
        <label>Tech Stack</label>
        <input
          type='text'
          placeholder={inputs.stack}
          name='stack'
          value={inputs.stack}
          onChange={handleInput}
        />
        <label>Description</label>
        <input
          type='text'
          placeholder={inputs.desc}
          name='desc'
          value={inputs.desc}
          onChange={handleInput}
        />
        <label>Deployed Site</label>
        <input
          type='url'
          placeholder={inputs.deployed}
          name='deployed'
          value={inputs.deployed}
          onChange={handleInput}
        />
        <label>GitHub Link</label>
        <input
          type='url'
          placeholder={inputs.github}
          name='github'
          value={inputs.github}
          onChange={handleInput}
        />
        <button type='submit' onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};
export default entryForm;
