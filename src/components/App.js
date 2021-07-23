
import React, { useState, useEffect } from "react"
import NavBar from "./NavBar"
import Login from "./Login"
import Matches from "./Matches"
import SignUp from "./SignUp"
import {Switch, Route } from "react-router-dom"
import Profile from "./Profile"

import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from "@material-ui/core/styles";

import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  appContainer:{
    backgroundColor:"#fff2f3",
    color:"#3f51b5",
    flexGrow:1
  },
  appContent: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  appText:{
    color:"#3f51b5",
  },
  appSubText:{
    color:"#7986cb",
  },
  mainPhoto:{
    maxHeight: "35%",
    minHeight: "35%",
    maxWidth: "35%",
    minWidth: "35%",
  }
}))

function App() {

  //STYLING
  const classes = useStyles()
   const theme = createTheme({
    overrides: {
      MuiTypography: {
        root: {
          color: "red",
        },
      },
    },
  })


  // Code
  const [currentUser, setCurrentUser] = useState(null)
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/users")
    .then(resp => resp.json())
    .then(data => setUsers(data))
  }, [])

  const updateUsersWithNewUser = (newUser) => {
    setUsers([...users, newUser])
  }

  function userLogin(form) {
    setCurrentUser(form)
  }

  return (
    <div className={classes.appContainer}>
      <ThemeProvider theme={theme}>
      <NavBar currentUser={currentUser} userLogin={userLogin}/>
      <div className={classes.appContent}>
      <h1 className={classes.appText}>Welcome to MatchMaker</h1>
      <h3 className={classes.appSubText}>Where we find your perfect match</h3>
      {currentUser ? null : <img className={classes.mainPhoto} src="https://previews.123rf.com/images/denis0909/denis09091012/denis0909101200008/29883567-the-cupid-is-aiming-from-a-machine-gun-charged-by-love-arrows.jpg" alt="cupid with a machine gun"></img>}
      <Switch>
        <Route exact path="/login">
          <Login userLogin={userLogin} users={users}/>
        </Route>
        <Route exact path="/users">
          <Matches currentUser={currentUser} users={users}/>
        </Route>
        <Route exact path="/users/new">
          <SignUp updateUsersWithNewUser={updateUsersWithNewUser} userLogin={userLogin}/>
        </Route>
        <Route exact path="/users/:id">
          <Profile />
        </Route>
      </Switch>
      </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
