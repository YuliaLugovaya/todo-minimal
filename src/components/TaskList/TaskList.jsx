import React from 'react';
import Task from '../Task/Task'

function TaskList({list, changeStatus, removeTask}) {
  return (
    <section className='task todo'>
      <h2 className='subtitle'>ToDo</h2>
      {list.map((post) => (
        <div key={post.id}>
          <Task id={post.id} text={post.text} changeStatus={changeStatus} status={post.status} removeTask={removeTask}/>
        </div>
      ))}
    </section>
  );
}

export default TaskList;