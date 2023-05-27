import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeStatusAC } from '../../store/actions/mainActions';
import { deleteTaskAC } from '../../store/actions/mainActions';
import { editTaskAC } from '../../store/actions/mainActions';

function Task({ id, text, status }) {

  const [checked, setChecked] = useState(false);
  const [edit, setEdit] = useState(null);
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  function changeStatus(id) {
    setChecked(!checked);
    dispatch(changeStatusAC(id));
  }

  function removeTask(id) {
    dispatch(deleteTaskAC(id));
  }

  function editTask(id, text) {
    setEdit(id);
    setValue(text);
  }

  function handleSubmitEdit(event) {
    event.preventDefault();
    dispatch(editTaskAC({
      id,
      value,
    }));
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
