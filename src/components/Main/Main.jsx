import { useState } from 'react';
import React from 'react';
import TaskList from '../TaskList/TaskList'
import Form from '../Form/Form'

function Main(props) {

  const [list, setList] = useState([]);
  let [text, setText] = useState('');
  const [checked, setChecked] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    const post = {
      text,
      id: Date.now(),
      status: false
    }
    setList((prev) => [...prev, post])
    setText('')
  }

  function changeStatus(id) {
    setChecked(!checked);
    setList(
      list.map((el) => {
        if (el.id === id) {
          el.status = !el.status;
        }
        return el;
      })
    );
  }

  return (
    <>
      <main className='main'>
        <h1 className='title'>Create your personal ToDo-list</h1>
        <Form text={text} setText={setText} handleSubmit={handleSubmit} />
        <TaskList list={list} changeStatus={changeStatus} checked={checked} />
      </main>
    </>
  );
}

export default Main;