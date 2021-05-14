import React from 'react';
import './App.css';
import Title from './components/titles/Title';
import TaskInput from './components/TaskInput/TaskInput';

function App() {
  return (
    <div className="App">
      <Title>To do list</Title>
      <TaskInput/>
    </div>
  );
}

export default App;
