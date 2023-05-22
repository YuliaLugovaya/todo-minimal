import React, { useContext } from 'react';
import Task from '../Task/Task';
import { globalContext } from '../../contexts/globalContext';

function TaskList() {

  const { list } = useContext(globalContext);

  return (
    <section className='task todo'>
      <h2 className='subtitle'>ToDo</h2>
      {list.map((post) => (
        <div key={post.id}>
          <Task id={post.id} text={post.text} status={post.status} />
        </div>
      ))}
    </section>
  );
}

export default TaskList;