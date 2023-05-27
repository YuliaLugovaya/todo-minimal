import '../../styles/App.css';
import Header from '../Header/Header'
import Main from '../Main/Main'
import Footer from '../Footer/Footer'
import React from 'react';
import { Provider } from 'react-redux';
import store from '../../store/store';

function App() {

  return (
    <div className="App wrapper">
      <Header />
      <Provider store={store}>
        <Main />
      </Provider>
      <Footer />
    </div>
  );
}

export default App;
