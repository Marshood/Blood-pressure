import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import Login from './view/components/login/login';
import Register from './view/components/Register/Register';
import MainPage from './view/components/MainPage/MainPage'
import Table from './view/components/Table/Table'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory
} from "react-router-dom"

function App() {

  const [counter, setCounter] = useState(0);
  let history = useHistory();

  return (

    <Router>
    <div className='app'>
      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
      <Route path="/MainPage">
          <MainPage />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/Register">
          <Register />
        </Route>
        <Route path="/Table">
          <Table />
        </Route>
        <Route path="/">
          <MainPage />
        </Route>
      </Switch>
    </div>
  </Router>
);
}

function Home() {
  return (
    <div className='page'>
      <h2>Home</h2>
    </div>
  )
}
function About() {
  let history = useHistory();
  return (
    <div className='page'>
      <h2>About</h2>
      <div onClick={()=>{
        history.push('/')
      }}>Go to home</div>
    </div>
  )
}
function Users() {
  return (
    <div className='page'>
      <h2>Users</h2>
      <Link to="/about"><div>Go to about</div></Link>
    </div>
  )
}
export default App;
