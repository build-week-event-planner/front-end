import React from 'react';
import TabNav from "./components/Nav";
import './App.css';
import Dashboard from './components/Dashboard';

function App() {

  return (
    <div>
      <TabNav />
      <Dashboard />
      <p> this is working:)</p>
    </div>
  )
}

export default App;
