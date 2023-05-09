import { useState } from 'react';
import React from 'react';
import TaskList from '../TaskList/TaskList'
import Form from '../Form/Form'

function Main(props) {

  const [list, setList] = useState([]);
  const [text, setText] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    const post = {
      text,
      id: Date.now()
    }
    setList((prev) => [...prev, post])
    setText('')
  }

  return (
    <>
      <main className='main'>
        <h1 className='title'>Create your personal ToDo-list</h1>
        <Form text={text} setText={setText} handleSubmit={handleSubmit}/>
        <TaskList list={list}/>
      </main>
    </>
  );
}

export default Main;