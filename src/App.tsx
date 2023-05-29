import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Test from './Test1';

function App() {
  const [a, setA] = useState();
  return (
    <div className="App">
      <header className="App-header">
        <Test />
      </header>
    </div>
  );
}

export default App;
