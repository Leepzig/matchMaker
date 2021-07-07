import React from "react"


function ProfileCard({user :{name, photo, aboutMe, hobbies }}) {

 const hobbyArray = hobbies.map(element => <li key={element}>{element}</li>)

  return (
    <div id="about">
      <h3>{name}</h3>
      <img src={photo.img} alt={photo.imgAlt}></img>
      <p>{aboutMe}</p>
      <ul>
        {hobbyArray}
      </ul>
    </div>
  )
}

export default ProfileCard