import React from "react"
import { useAuth0 } from "../services/auth";

const Profile = () => {
  const { loading, user } = useAuth0();

  if (loading || !user) {
    return <div>Loading...</div>;
  }

  return(
    <>
      <h1>Your profile</h1>
      <img src={user.picture} alt="Profile" />
      <dl>
        <dt>Name</dt>
        <dd>{user.name}</dd>

        <dt>Email</dt>
        <dd>{user.email}</dd>
      </dl>
    </>
  )
}

export default Profile