import '../../styles/App.css';
import Header from '../Header/Header'
import Main from '../Main/Main'
import Footer from '../Footer/Footer'
import { globalContext as GlobalContext } from '../../contexts/globalContext';
import React from 'react';
import { useLocalStorage } from '../../hooks/useLS';


function App() {

  const initialState = {
    list: []
  }

  const [state, dispatch] = useLocalStorage('tasks', initialState);

  return (
    <div className="App wrapper">
      <Header />
      <GlobalContext.Provider value={{ state, dispatch }}>
        <Main />
      </GlobalContext.Provider>
      <Footer />
    </div>
  );
}

export default App;