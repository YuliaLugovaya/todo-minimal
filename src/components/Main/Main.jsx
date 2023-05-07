import { useState } from 'react';
import React from 'react';

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
        <section className='task add'>
          <h2 className='subtitle'>Add task</h2>
          <form className='mb-3 add__field' onSubmit={handleSubmit}>
            <label htmlFor="exampleInputEmail1" className="form-label"></label>
            <input
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Write task"
              onChange={(event) => setText(event.target.value)}
              value={text}
            />
            <button type="submit" className="btn btn-primary">Add</button>
          </form>
        </section>
        <section className='task todo'>
          <h2 className='subtitle'>ToDo</h2>
          {list?.map((post) => (
            <div className="mb-3 form-check">
              <input type="checkbox" className="form-check-input" id="exampleCheck1" />
              <label className="form-check-label" for="exampleCheck1">{post.text}</label>
            </div>
          ))}
        </section>
      </main>
    </>
  );
}

export default Main;