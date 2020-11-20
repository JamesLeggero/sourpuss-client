

import React from 'react'
import Button from '@material-ui/core/Button'

import './App.css';
import GigTable from './components/GigTable'


function App() {
  return (
    <div className="App">
      <h1>SOURPUSS</h1>
      <GigTable />
      <Button onClick={
        (event)=>{
          event.preventDefault();
          console.log('clicked');
          }
          }>
        Click for more
      </Button>
    </div>
  );
}

export default App;
