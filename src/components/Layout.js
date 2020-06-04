import React from "react"
import NavBar from "./NavBar"
import { useAuth0 } from "../services/auth"

const Layout = ({ children }) => {
  const { loading } = useAuth0()

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <>
      <NavBar />
      {children}
    </>
  )
}

export default Layout