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

  function changeStatus() {
    const checkbox = document.getElementById('exampleCheck1');
    const checkboxText = document.querySelector('.form-check-label');
    if (checkbox.checked === true){
      checkboxText.style.textDecoration = "line-through";
    } else {
      checkboxText.style.textDecoration = "none";
    }
  }

  return (
    <>
      <main className='main'>
        <h1 className='title'>Create your personal ToDo-list</h1>
        <Form text={text} setText={setText} handleSubmit={handleSubmit}/>
        <TaskList list={list} changeStatus={changeStatus}/>
      </main>
    </>
  );
}

export default Main;