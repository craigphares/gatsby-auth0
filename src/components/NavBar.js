import React from "react"
import { Link } from "gatsby"
import { useAuth0 } from "../services/auth"

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0()

  return (
    <nav>
      <Link to="/">Home</Link>
      {` `}
      {isAuthenticated &&
        <Link to="/account/profile">Profile</Link>
      }
      {` `}

      {!isAuthenticated && (
        <button onClick={() => loginWithRedirect({})}>Log in</button>
      )}

      {isAuthenticated && <button onClick={() => logout()}>Log out</button>}
    </nav>
  )
}

export default NavBar