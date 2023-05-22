import '../../styles/App.css';
import Header from '../Header/Header'
import Main from '../Main/Main'
import Footer from '../Footer/Footer'
import { globalContext as GlobalContext } from '../../contexts/globalContext';
import { useReducer, useEffect } from 'react';
import React from 'react';
import { reducer, initializer, initialState } from '../../reducers/reducer';


function App() {

  const [state, dispatch] = useReducer(reducer, initialState, initializer);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(state));
  }, [state]);

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
