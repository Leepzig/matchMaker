
import React, { useState, useEffect } from "react"
import NavBar from "./NavBar"
import Login from "./Login"
import Matches from "./Matches"
import SignUp from "./SignUp"
import {Switch, Route } from "react-router-dom"
import Profile from "./Profile"

function App() {
  const [currentUser, setCurrentUser] = useState({})
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
    <div>
      <NavBar />
      <h1>Welcome to Literary MatchMaker</h1>
      <h3>Where we match you to your sterotypical literary match</h3>
      <Switch>
        <Route path={`/users/${currentUser.id}`}>
          <Profile userLogin={userLogin} users={users}/>
        </Route>
        <Route exact path="/login">
          <Login userLogin={userLogin} users={users}/>
        </Route>
        <Route exact path="/users">
          <Matches users={users}/>
        </Route>
        <Route exact path="/users/new">
          <SignUp updateUsersWithNewUser={updateUsersWithNewUser}/>
        </Route>
        <Route exact path="/users/:id">
          <Profile />
        </Route>
      </Switch>

    </div>
  );
}

export default App;
