import React from 'react';
import Task from '../Task/Task';
import { useSelector } from 'react-redux';

function TaskList() {

  const { list } = useSelector((store) => store.mainStore);

  return (
    <section className='task todo'>
      <h2 className='subtitle'>ToDo</h2>
      {list && list.map((post) => (
        <div key={post.id}>
          <Task id={post.id} text={post.text} status={post.status} />
        </div>
      ))}
    </section>
  );
}

export default TaskList;