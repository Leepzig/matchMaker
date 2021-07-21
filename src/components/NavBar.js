import React from "react"
import { NavLink } from "react-router-dom"

function NavBar() {




return (
<nav>
    <NavLink to="/">Home</NavLink>  |  
    <NavLink to="/users">Matches</NavLink>  |  
    <NavLink to="/login">Login</NavLink>  |  
    <NavLink to="/users/new">Sign up</NavLink>
</nav> )
}

export default NavBar