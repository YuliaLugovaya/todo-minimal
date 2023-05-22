import React, { useContext } from 'react';
import { globalContext } from '../../contexts/globalContext';

function Form() {

  const { text, setText, handleSubmit } = useContext(globalContext);

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