import React from 'react';
import './App.css';
import { ChattyApp } from './containers/chat/Chat';

console.log('process.env.REACT_APP_API_KEY', process.env.REACT_APP_API_KEY);
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ChattyApp />
      </header>
    </div>
  );
}

export default App;
