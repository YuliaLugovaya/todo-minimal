import React from 'react';

function Task({ id, text, changeStatus }) {
  return (
    <div key={id} className="mb-3 form-check">
      <input
        type="checkbox"
        className="form-check-input"
        id="exampleCheck1"
        onChange={changeStatus}/>
      <label className="form-check-label" htmlFor="exampleCheck1">{text}</label>
    </div>
  );
}

export default Task;