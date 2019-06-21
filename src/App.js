import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  var edit = 'Edit ' + <code>+'src/App.js'+</code> + ' and save to recontraload';
  const user = {
    firstName: 'Manuel',
    lastName: 'Bond'
  }

  const element = (
    <h1>{formatName(user)}!</h1>
  );
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {element}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

export default App;
