import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import React from 'react';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import { Typography } from '@material-ui/core';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
      minWidth: 300,
    },
    media: {
      height: 140,
    },
  });

export interface CardProp {
    imgUrl : string
    name : string
    description: string | undefined
}

export default function (props: CardProp){

    const classes = useStyles();

    

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={props.imgUrl}
                    title="person"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.name}
                    </Typography>
                    {
                        props.description ? 
                        <Typography variant="body2" color="textSecondary" component="p">
                            {props.description}
                        </Typography> : 
                        <div></div>
                    }
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