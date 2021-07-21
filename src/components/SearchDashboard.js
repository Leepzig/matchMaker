import React, { useState } from 'react'

const SearchDashboard = ( { filter } ) => {

  const [formData, setFormData] = useState({
    interestedIn:"all",
    search:""
  })

  function handleChange (event) {
    const value = event.target.value
    const key = event.target.name
    setFormData({...formData, [key]:value})
  }

  return (
    <div>
      <form>
        <div>
          <label>Interested In</label>
          <select name="interestedIn" value={formData.interestedIn} onChange={handleChange}>
            <option value="all">No Preference</option>
            <option value="men">Men</option>
            <option value="women">Women</option>
          </select>
        </div>
        <div>
          <label>Search</label>
          <input name="search" value={formData.search} onChange={handleChange}/>
        </div>
      </form>
    </div>
  )
}

export default SearchDashboard
