import logo from './logo.svg';
import './App.css';
import { useEffect, useRef } from 'react';

function App() {
  const didMakePingRequest = useRef(false);

  const makePingAPIRequest = () => {
    fetch('http://localhost:8080/api/ping')
      .then(res => res.text())
      .then(resText => console.log(resText));
  };


  useEffect(() => {
    if (!didMakePingRequest.current) {
      didMakePingRequest.current = true;
      makePingAPIRequest();
    }
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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

export default App;
