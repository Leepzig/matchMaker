import React from  "react"
import ProfileCard from "./ProfileCard"
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));


function Matches({ users, currentUser }) {

  const classes = useStyles();


  
  const currentUserMatches = currentUser ? users.filter( user => currentUser.interestedIn === user.gender) : users

  return (
  <>
    <h3>Your Current Matches:</h3>
    <Grid container spacing={1} xs={12}>

      { currentUserMatches.map(element => <Grid item xs={12} sm={3}><Paper className={classes.paper}><ProfileCard key={element.name} user = {element}/></Paper></Grid>)}
    
    </Grid>
    </>
  )
}

export default Matches