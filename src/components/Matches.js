import React, { useState} from  "react"
import ProfileCard from "./ProfileCard"
import SearchDashboard from "./SearchDashboard"


function Matches({ users }) {
  const [filter, setFilter] = useState({
    filterBy:"",
    sortBy:""
  })

  function handleFilterChange(e) {
    const key = e.target.name
    const value = e.target.value
    setFilter({...filter, [key]:value})
  }


  return (
  <>
    <SearchDashboard handleFilterChange={handleFilterChange}/>
    <h3>Your Current Matches:</h3>
    <div className="ui cards">
      {users.map(element => <ProfileCard 
      key={element.name} 
      user = {element}/>)}
    </div>
    </>
  )
}

export default Matches