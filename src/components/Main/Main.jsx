import React from 'react';
import TaskList from '../TaskList/TaskList'
import Form from '../Form/Form'


function Main(props) {

  return (
    <>
      <main className='main'>
        <h1 className='title'>Create your personal ToDo-list</h1>
        <Form />
        <TaskList />
      </main>
    </>
  );
}

export default Main;