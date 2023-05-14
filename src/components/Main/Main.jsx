import { useState } from 'react';
import React from 'react';
import TaskList from '../TaskList/TaskList'
import Form from '../Form/Form'
import { useLocalStorage } from '../../hooks/useLS'


function Main(props) {

  const [list, setList] = useLocalStorage('tasks', []);
  const [text, setText] = useState('');
  const [checked, setChecked] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    const post = {
      text,
      id: Date.now(),
      status: false
    }
    setList((prev) => [...prev, post]);
    setText('');
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

  function removeTask(id) {
    setList(list.filter((el) => id !== el.id));
  }

  return (
    <>
      <main className='main'>
        <h1 className='title'>Create your personal ToDo-list</h1>
        <Form text={text} setText={setText} handleSubmit={handleSubmit} />
        <TaskList list={list} changeStatus={changeStatus} checked={checked} removeTask={removeTask}/>
      </main>
    </>
  );
}

export default Main;