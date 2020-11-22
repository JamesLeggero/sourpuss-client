import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles({
    table: {
        minWidth: 650
    }
})

const handleClick = event => {
    event.persist()
    window.open(event.target.id)
}

export default function GigTable(props){

    // const [id, venue_stream] = props.gigs
    const classes = useStyles()

    return (
        <>
        <TableContainer coponent={Paper}>
            <Table className={classes.table} aria-label='gig table'>
                <TableHead>
                    <TableRow>
                        <TableCell align='right'>Band</TableCell>
                        <TableCell align='right'>Venue/Stream</TableCell>
                        <TableCell align='right'>Support</TableCell>
                        <TableCell align='right'>Date</TableCell>
                        <TableCell align='right'>Time</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.gigs.map(gig => {
                        return(
                        <TableRow key={gig.id}>
                            <TableCell align='right'>{gig.band}</TableCell>
                            <TableCell 
                                align='right'>

                                 <a 
                                    style={{
                                        textDecoration: 'none',
                                        color: 'black'
                                    }}
                                    href={
                                     gig.v_s_link.slice(0, 4)=== 'http' ?
                                     gig.v_s_link :
                                     `https://${gig.v_s_link}`
                                     } target='_blank' rel='noreferrer noopener'>
                                     {gig.venue_stream}
                                 </a>
                                
                            </TableCell>
                            <TableCell align='right'>{gig.support}</TableCell>
                            <TableCell align='right'>{gig.date}</TableCell>
                            <TableCell align='right'>{gig.time}</TableCell>
                        </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </TableContainer>
        {/* {
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
        } */}
        </>
    )
}