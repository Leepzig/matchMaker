import React from "react"
import ProfileCard from "./ProfileCard"


const ProfileList = (props) => {

  const profileMatches = props.users.map(element => <ProfileCard key={element.name} user = {element}/>)

  return (
    <div>
    <h3>Your Current Matches:</h3>
    {profileMatches}
    </div>
  )
}

export default ProfileList