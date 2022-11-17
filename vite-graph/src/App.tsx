import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  useEffect(() => {
    navigator.serviceWorker.ready.then((registration) => {
      window.addEventListener('beforeunload', () => {
        registration.active?.postMessage({ text: `User left at: ${new Date()}`, type: "SEND_REQUEST" });
      })
    });
  }, []);


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Vite 2 Version
        </p>
        <button onClick={() => {
          console.log("TEST")
          navigator.serviceWorker.ready.then((registration) => {
            registration.active?.postMessage({ text: `User clicked at: ${new Date()}`, type: "SEND_REQUEST" });
          });
        }}>Test</button>
      </header>
    </div>
  );
}

export default App;
