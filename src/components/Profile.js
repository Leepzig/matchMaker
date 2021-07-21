import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

const Profile = () => {

  const [profile, setProfile] = useState(null)

  const { id } = useParams()

  
  useEffect(() => {
    fetch(`http://localhost:3001/users/${id}`)
    .then(resp => resp.json())
    .then(data => setProfile(data))
  }, [id])
  
  if (!profile) return <h2>Loading...</h2>


  return (
    <div>
      <h2>{profile.name}</h2>
      <img src={profile.photo }alt="Profile shot"></img>
      <p>Bio: {profile.bio}</p>
      <p>Likes: {profile.likes}</p>
      <p>Dislikes: {profile.dislikes}</p>
      <p>Interested in:{profile.interestedIn}</p>

    </div>
  )
}

export default Profile
