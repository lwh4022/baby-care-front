import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import React from 'react';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import { Typography } from '@material-ui/core';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import { RootState } from '../../store/Store';
import { useDispatch, useSelector } from 'react-redux';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });

export default function (){

    const classes = useStyles();

    const state = useSelector((state : RootState) => state.coach)
    const dispatch = useDispatch();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={state.imgUrl}
                    title="person"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {state.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {state.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                Dat
                </Button>
                <Button size="small" color="primary">
                Chi tiet
                </Button>
            </CardActions>
        </Card>
    )
}