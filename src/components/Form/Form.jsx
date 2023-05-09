import React from 'react';

function Form({text, setText, handleSubmit}) {
  return (
    <section className='task add'>
          <h2 className='subtitle'>Add task</h2>
          <form className='mb-3 add__field' onSubmit={handleSubmit}>
            <label htmlFor="exampleInputEmail1" className="form-label"></label>
            <input
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
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