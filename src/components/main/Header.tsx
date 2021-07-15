import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  toolbar: {
    minHeight: 32,
    alignItems: 'flex-start',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
    backgroundColor: 'white'
  },
  title: {
    flexGrow: 1,
    alignSelf: 'flex-end',
    color: 'black'
  },
}));

export default function FixedContainer() {

  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Typography className={classes.title} variant="h5" noWrap>
          육아코치
        </Typography>
      </Toolbar>
    </AppBar>
  );
}