import React from 'react';

function Task({ id, text, changeStatus, checked, status }) {
  return (
    <div className="mb-3 form-check">
      <input
        type="checkbox"
        className="form-check-input"
        id="exampleCheck1"
        checked={status}
        onChange={() => changeStatus(id)}/>
      <label className="form-check-label" htmlFor="exampleCheck1" style={status ? {textDecorationLine: 'line-through'} : {textDecorationLine: 'none'}}>{text}</label>
    </div>
  );
}

export default Task;