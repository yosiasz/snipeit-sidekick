import React, { StrictMode, useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

import './App.css';
import List from './components/List';
import MenuAppBar from './components/AppBar';

export interface IState {
  people: {
      id: number,
      name: string
      age: number
      img: string
      note?: string
  }[]
}

function App() {

  const [error, setError] = useState(null);
  const [users, setUsers] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/")
        .then(res => res.json())
        .then(
            (data) => {
                setIsLoaded(true);
                setUsers(data);
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        )
  }, [])

  return (
    <div className="App">
      <MenuAppBar></MenuAppBar>
      <header className="App-header">
        <List people={users} />
      </header>
    </div>
  );
}

export default App;
