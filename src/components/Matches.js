import React, { useState} from  "react"
import ProfileCard from "./ProfileCard"



function Matches({ users, currentUser }) {

  
  const currentUserMatches = currentUser ? users.filter( user => currentUser.interestedIn === user.gender) : users


  return (
  <>
    <h3>Your Current Matches:</h3>
    <div className="ui cards">
      {currentUserMatches.map(element => <ProfileCard 
      key={element.name} 
      user = {element}/>)}
    </div>
    </>
  )
}

export default Matches