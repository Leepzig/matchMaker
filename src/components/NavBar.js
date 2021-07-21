import React from "react"
import { NavLink } from "react-router-dom"

function NavBar( { currentUser, userLogin } ) {




return (
<nav>
    <NavLink to={currentUser ? `/users/${currentUser.id}` : "/"}>Home</NavLink>  |  
    <NavLink to="/users">Matches</NavLink>  |  
    {currentUser ? <NavLink to="/login"><a onClick={() => userLogin(null)}>Logout</a></NavLink> :<NavLink to="/login">Login</NavLink>}  |  
    {currentUser ? null : <NavLink to="/users/new">Sign up</NavLink>}
</nav> )
}

export default NavBar