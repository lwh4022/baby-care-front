import { makeStyles } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme) =>({

    mainImage: {
        objectFit: 'fill',
        width : '100%',
        height: 200
    }

}))


export default function(){

    const classes = useStyles();

    const imageUrl = "baby-care.jpg"
    return (
        <img src= {imageUrl} className={classes.mainImage}/>
    )
}