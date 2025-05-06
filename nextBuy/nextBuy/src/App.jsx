// src/App.js
import { useState } from 'react';
import './App.css';
import MainRouter from './router/mainRouter';
import { store } from './components/store';
import { Provider } from 'react-redux'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <Provider store={store}>
      <MainRouter />
    </Provider>
    </>
  );
}

export default App;
