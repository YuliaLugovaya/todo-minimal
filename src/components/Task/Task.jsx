import React from 'react';

function Task({ id, text, changeStatus, status, removeTask }) {
  return (
    <div className="mb-3 form-check">
      <input
        type="checkbox"
        className="form-check-input"
        checked={status}
        onChange={() => changeStatus(id)} />
      <label
        className={status ? "form-check-label complited" : "form-check-label"}
        htmlFor="exampleCheck1">
        {text}
      </label>
      <button className="btn btn-primary form-check-btn" onClick={() => removeTask(id)}>
        Delete
      </button>
    </div>
  );
}

export default Task;