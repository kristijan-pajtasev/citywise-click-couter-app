import React from 'react';
import Counter from './Counter/Counter';
import './App.css';

function App() {
  return (
    <div className="App">
      <Counter />
      <Counter initialValue={10} />
    </div>
  );
}

export default App;
