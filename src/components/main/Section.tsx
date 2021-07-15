import Typography from '@material-ui/core/Typography'
import React from 'react'
import ShortCardLayout from '../card/ShortCardLayout'


export default function(){
    return (
        <div style={{display:'flex', flexDirection:'row'}}>
            <div style={{width:'25%'}}></div>
            <div style={{width:'50%'}}>
            

            <Typography variant="h3" component="h5">
                Coach
            </Typography>
            <ShortCardLayout stateName="coach"/>

            <Typography variant="h3" component="h5">
                Contents
            </Typography>
            <ShortCardLayout stateName="babyInfo"/>
            </div>
            <div style={{width:'25%'}}></div>
        </div>
    )
}