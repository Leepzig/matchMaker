import React from "react"
import { NavLink } from "react-router-dom"

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
      marginLeft: theme.spacing(2),
    },
    textColor:{
      color:"#ffedef"
    }
  }));


function NavBar( { currentUser, userLogin } ) {

  const classes = useStyles();

return (
<div className={classes.root}>

    <AppBar position="static">
        <Toolbar>
            <Typography variant="h6">
                <NavLink to={currentUser ? `/users/${currentUser.id}` : "/"}><a className={classes.textColor}>Home</a></NavLink>
            </Typography>
            <Typography variant="h6" className={classes.title}>
                <NavLink className={classes.title} to="/users"><a className={classes.textColor}>Matches</a></NavLink>
            </Typography>
            <Button color="inherit">{currentUser ? <NavLink to="/login"><a className={classes.textColor} onClick={() => userLogin(null)}>Logout</a></NavLink> :<NavLink to="/login"><a className={classes.textColor}>Login</a></NavLink>}</Button>
            {currentUser ? null :<Button color="inherit"><NavLink to="/users/new"><a className={classes.textColor}>Sign up</a></NavLink></Button>}
        </Toolbar>
    </AppBar>
</div>

 )
}

export default NavBar