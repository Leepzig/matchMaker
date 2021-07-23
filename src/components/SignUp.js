import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { TextField, Select, FormControl, MenuItem } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';



const SignUp = ({ updateUsersWithNewUser, userLogin }) => {

  const useStyles = makeStyles((theme) => ({
    textarea:{
      margin: theme.spacing(1),
      width: '25ch',
    }
  }))

  const classes = useStyles()

  const [formData, setFormData] = useState({
    name:"",
    photo:"",
    bio:"",
    likes:"",
    dislikes:"",
    interestedIn:""
  })

  const history = useHistory()

  const handleOnChangeInput = (e) => {
    const value = e.target.value
    const key = e.target.name
    setFormData({...formData, [key]:value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    fetch("http://localhost:3001/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
  },
      body: JSON.stringify(formData)
    })
    .then(resp => resp.json())
    .then(data => {
      updateUsersWithNewUser(data)
      history.push(`/users/${data.id}`)
      userLogin(data)
    })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <br></br>
        <TextField type="text"  name="name" value={formData.name} onChange={handleOnChangeInput} label="Name:" />
        <br></br>        
        <br></br>
        <TextField type="text"  name="gender" value={formData.gender} onChange={handleOnChangeInput} label="Gender:" />
        <br></br>        
        <br></br>
        <TextField type="text" name="photo" value={formData.photo} onChange={handleOnChangeInput} label="Image Url:" />
        <br></br>
        <br></br>
        <TextField rows={4} className={classes.textarea} multiline name="bio" value={formData.bio} onChange={handleOnChangeInput} label="Bio:"/>
        <br></br>
        <br></br>
        <TextField  type="text" name="likes" value={formData.likes} onChange={handleOnChangeInput} label="Your Likes:" />
        <br></br>
        <br></br>
        <TextField  type="text" name="dislikes" value={formData.dislikes} onChange={handleOnChangeInput} label="Your Dislikes" />
        <br></br>
        <br/>
        <FormControl >
        <Select name="interestedIn" value={formData.interestedIn} onChange={handleOnChangeInput}>
          <MenuItem value="male">Men</MenuItem>
          <MenuItem value="female">Women</MenuItem>
        </Select>
      </FormControl>
      <br></br>
      <br></br>
        <button type="submit">Submit</button>
      </form>
      
    </div>
  )
}

export default SignUp
