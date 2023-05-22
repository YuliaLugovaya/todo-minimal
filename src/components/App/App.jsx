import '../../styles/App.css';
import Header from '../Header/Header'
import Main from '../Main/Main'
import Footer from '../Footer/Footer'
import { globalContext as GlobalContext } from '../../contexts/globalContext';
import { useState } from 'react';
import React from 'react';
import { useLocalStorage } from '../../hooks/useLS';


function App() {

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
    if (text) {
      setList((prev) => [...prev, post]);
    }
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
    <div className="App wrapper">
      <Header />
      <GlobalContext.Provider value={{ list, setList, text, setText, checked, setChecked, handleSubmit, changeStatus, removeTask }}>
        <Main />
      </GlobalContext.Provider>
      <Footer />
    </div>
  );
}

export default App;
