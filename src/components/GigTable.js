import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function GigTable(props){

    const [gigs, setGigs] = useState({})

    useEffect(() => {

        (async () => {
            const response = await axios.get('http://localhost:3001/gigs')
            await setGigs(response.data)
        })()
    }, [])

    // console.log([gigs])
    console.log(gigs)

    useEffect(()=>{}, [gigs])
    
    

    return (
        <>
        <h2>test!</h2>
        {/* {
        gigs.map(gig => {
            return (
                <div key={gig.id}>
                    {
                    gig.venue_stream === null ?
                    <h2>No Venue</h2> :
                    <h2>{gig.venue_stream}</h2>

                    }
                </div>
            )

        })
        } */}
        </>
    )
}