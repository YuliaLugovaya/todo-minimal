import React from 'react';
import Task from '../Task/Task'

function TaskList({list, changeStatus, checked}) {
  return (
    <section className='task todo'>
      <h2 className='subtitle'>ToDo</h2>
      {list?.map((post) => (
        <div key={post.id}>
          <Task id={post.id} text={post.text} changeStatus={changeStatus} checked={checked} status={post.status}/>
        </div>
      ))}
    </section>
  );
}

export default TaskList;