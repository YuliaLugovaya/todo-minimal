import React from 'react';
import Task from '../Task/Task'

function TaskList({list, changeStatus}) {
  return (
    <section className='task todo'>
      <h2 className='subtitle'>ToDo</h2>
      {list?.map((post) => (
        <Task id={post.id} text={post.text} changeStatus={changeStatus}/>
      ))}
    </section>
  );
}

export default TaskList;