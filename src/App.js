

import React, { useState, useEffect } from 'react'
import axios from 'axios'
// import Button from '@material-ui/core/Button'


import './App.css';
import GigTable from './components/GigTable'
import NewGig from './components/NewGig'


function App() {

  const [gigs, setGigs] = useState([])

    useEffect(() => {

        (async () => {
            const response = await axios.get('http://localhost:3001/gigs')
            // await console.log(response.datas)
            await setGigs(response.data.gigs)
        })()
    }, [])
    useEffect(()=>{}, [gigs])

  return (
    <div className="App">
      <h1>SOURPUSS</h1>
      <GigTable gigs={gigs} />
      {/* <Button onClick={
        (event)=>{
          event.preventDefault();
          console.log('clicked');
          }
          }>
        Click for more
      </Button> */}
      {/* <NewGig /> */}
    </div>
  );
}

export default App;
