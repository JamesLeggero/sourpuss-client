import React from 'react'

export default function GigTable(props){

    // const [id, venue_stream] = props.gigs

    return (
        <>
        {
        props.gigs.map(gig => {
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
        }
        </>
    )
}