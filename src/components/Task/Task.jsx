import React, { useContext, useState } from 'react';
import { globalContext } from '../../contexts/globalContext';

function Task({ id, text, status }) {

  const { dispatch } = useContext(globalContext);

  const [checked, setChecked] = useState(false);

  function changeStatus(id) {
    setChecked(!checked);
    dispatch({
      type: 'CHANGE_STATUS',
      payload: id,
    })
  }

  console.log(status)
  function removeTask(id) {
    dispatch({
      type: 'DELETE_TASK',
      payload: id,
    })
  }

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