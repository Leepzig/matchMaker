import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

import StyledP from "./styled/StyledP"
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core'


const useStyles = makeStyles((theme) => ({
  profileContainer: {
    flexGrow:1
  },
  profile:{
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  title:{
    color:"#c2185b"
  },
  photo:{
    maxHeight: "25%",
    minHeight: "25%",
    maxWidth: "25%",
    minWidth: "25%",
  }
}))


const Profile = ( ) => {

  const classes = useStyles();


  const [profile, setProfile] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    fetch(`http://localhost:3001/users/${id}`)
    .then(resp => resp.json())
    .then(data => setProfile(data))
  }, [id])
  
  if (!profile) return <h2>Loading...</h2>


  return (
    <div className={classes.profileContainer}>
      <Typography className={classes.profile} >
        <h2 className={classes.title}>{profile.name}</h2>
        <img className={classes.photo} src={profile.photo }alt="Profile shot"></img>
        <StyledP>Bio: {profile.bio}</StyledP>
        <StyledP>Likes: {profile.likes}</StyledP>
        <StyledP>Dislikes: {profile.dislikes}</StyledP>
        <StyledP>Interested in:{profile.interestedIn}</StyledP>
      </Typography>
    </div>
  )
}

export default Profile
