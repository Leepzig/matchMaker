import React, {useState, useEffect} from  "react"
import { useHistory } from "react-router-dom"
import { Link } from "react-router-dom"

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

function Login({ userLogin, users}) {
  const [userForm, setUserForm] = useState("")
  const [username, setUserName] = useState("")
  const history = useHistory()

  const classes = useStyles()

  const handleChange = (e) => {
    setUserForm(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    setUserName(userForm)
    matchUsername()
  }

  const matchUsername = () => {
    if (username !== "") {
        const user = users.find( user => user.name === username)

        if (user) {
          userLogin(user)
          history.push(`users/${user.id}`)
        } else {
          alert("You're not a user!")

      }
    }
  }
  
  useEffect(matchUsername, [username])

  return (
<div>
  <form onSubmit={handleSubmit} className={classes.root}>
    <TextField label="Login" onChange={handleChange} type="text" value={userForm}/>
    <Button type="submit" variant="contained" disableElevation>Submit</Button>
  </form>
  <br></br>
  <small>Not a member? Sign Up <Link to="/users/new">Here!</Link></small>
</div>
  )
}

export default Login