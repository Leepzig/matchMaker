import React from "react"
import { Link, useRouteMatch } from "react-router-dom"


function ProfileCard({user :{name, photo, bio, likes, id }}) {

 const match = useRouteMatch()


  return (
    <div className="ui card">
      <Link to={`${match.url}/${id}`}><h3>{name}</h3></Link>
      <img src={photo} alt="profile headshot"></img>
      <p>{bio}</p>
      <ul>
        {likes}
      </ul>
    </div>
  )
}

export default ProfileCard