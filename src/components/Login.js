import React, {useState, useEffect} from  "react"

function Login({ userLogin, users}) {
  const [userForm, setUserForm] = useState("")
  const [username, setUserName] = useState("")

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
        // debugger
        if (user) {
          userLogin(user)
        } else {
          alert("You're not a user!")
          //TODO redirect to sign up
      }
    }
  }
  
  useEffect(matchUsername, [username])

  return (
<div>
  <form onSubmit={handleSubmit}>
    <label>Login</label>
    <input onChange={handleChange} type="text" value={userForm}></input>
    <input type="submit"></input>
  </form>
  <br></br>
  <small>Not a member? Sign Up Here!</small>
</div>
  )
}

export default Login