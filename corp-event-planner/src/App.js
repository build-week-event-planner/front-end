import React from 'react';
import Nav from "./components/Nav";
import AppRouter from "./components/AppRouter";
import './App.css';

function App() {
  return (
    <div>
      <Nav />
      <AppRouter />
      <p> this is working:)</p>
    </div>
  );
}

export default App;
