import React, {useEffect} from 'react';
import Nav from "./components/Nav";
import './App.css';
import Dashboard from './components/Dashboard';

function App() {

  useEffect(() => {
    const newAccountData = {
      username: "lizdoyle",
      password: "SecurePassword1!"
    }

    axiosWithAuth.post('https://corporate-event-planner.herokuapp.com/login', newAccountData)
        .then(res => 
          console.log(res.data))
          .catch(err => console.log(err))


  }, []);
  return (
    <div>
      <Nav />
      <Dashboard />
      <p> this is working:)</p>
    </div>
  )
}

export default App;
