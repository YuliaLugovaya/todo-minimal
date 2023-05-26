import React, { useContext, useState } from 'react';
import { globalContext } from '../../contexts/globalContext';

function Form() {

  const { dispatch } = useContext(globalContext);

  const [text, setText] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    if (text) {
      dispatch({
        type: 'ADD_TASK',
        payload: {
          text,
          id: Date.now(),
          status: false,
        }
      })
    }
    setText('');
  }

  return (
    <section className='task add'>
      <h2 className='subtitle'>Add task</h2>
      <form className='mb-3 add__field' onSubmit={handleSubmit}>
        <label htmlFor="exampleInput" className="form-label"></label>
        <input
          className="form-control"
          placeholder="Write task"
          onChange={(event) => setText(event.target.value)}
          value={text}
        />
        <button type="submit" className="btn btn-primary">Add</button>
      </form>
    </section>
  );
}

export default Form;