import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'


const SignUp = ({ updateUsersWithNewUser, userLogin }) => {

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
        <label htmlFor="name">Name:</label><br></br>
        <input type="text"  name="name" value={formData.name} onChange={handleOnChangeInput}></input>
        <br></br>        
        <label htmlFor="photo">Image Url</label><br></br>
        <input type="text" name="photo" value={formData.photo} onChange={handleOnChangeInput}></input>
        <br></br>
        <label htmlFor="bio">Your Bio</label><br></br>
        <textarea name="bio" value={formData.bio} onChange={handleOnChangeInput}></textarea>
        <br></br>
        <label htmlFor="likes">Your Likes</label><br></br>
        <input  type="text" name="likes" value={formData.likes} onChange={handleOnChangeInput}></input>
        <br></br>
        <label htmlFor="dislikes">Your Dislikes</label><br></br>
        <input  type="text" name="dislikes" value={formData.dislikes} onChange={handleOnChangeInput}></input>
        <br></br>
        <label htmlFor="interestedIn" >Interested In:</label>
        <select name="interestedIn" value={formData.interestedIn} onChange={handleOnChangeInput}>
          <option value="all">No Preference</option>
          <option value="male">Men</option>
          <option value="female">Women</option>
        </select>
        <button type="submit">Submit</button>
      </form>
      
    </div>
  )
}

export default SignUp
