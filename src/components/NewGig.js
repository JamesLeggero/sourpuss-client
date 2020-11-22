import React from 'react'
import TextField from '@material-ui/core/TextField'

export default function NewGig(props){

    return (
        <>
            <form onSubmit={props.handleNewGigSubmit}>
                <TextField id='band' label='Band' />
                <br />
                <TextField 
                    id='venue_stream'
                    helperText='Please include https://'
                    label='Venue/Stream'
                />

            </form>
        </>
    )



}