import React, { useContext, useState } from 'react';
import { globalContext } from '../../contexts/globalContext';

function Task({ id, text, status }) {

  const { dispatch } = useContext(globalContext);

  const [checked, setChecked] = useState(false);
  const [edit, setEdit] = useState(null);
  const [value, setValue] = useState('');

  function changeStatus(id) {
    setChecked(!checked);
    dispatch({
      type: 'CHANGE_STATUS',
      payload: id,
    })
  }

  function removeTask(id) {
    dispatch({
      type: 'DELETE_TASK',
      payload: id,
    })
  }

  function editTask(id, text) {
    setEdit(id);
    setValue(text);
  }

  function handleSubmitEdit(event) {
    event.preventDefault();
    dispatch({
      type: 'EDIT_TASK',
      payload: {
        id,
        value,
      }
    })
    setEdit(null)
  }

  return (
    <>
      {edit === id ? (
        <form className='mb-3 add__field' onSubmit={handleSubmitEdit}>
          <label htmlFor="exampleInput" className="form-label"></label>
          <input
            className="form-control"
            onChange={(event) => setValue(event.target.value)}
            value={value}
          />
          <button type="submit" className="btn btn-primary">Update</button>
        </form>
      ) : (
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
          <button className="btn btn-primary form-check-btn" onClick={() => editTask(id, text)}>
            Edit
          </button>
          <button className="btn btn-primary form-check-btn" onClick={() => removeTask(id)}>
            Delete
          </button>
        </div>
      )}
    </>
  );
}

export default Task;
