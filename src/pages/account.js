import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/Layout"
import Profile from "../components/Profile"
import PrivateRoute from "../components/PrivateRoute"

const Account = () => (
  <Layout>
    <Router>
      <PrivateRoute path="/account/profile" component={Profile} />
    </Router>
  </Layout>
)

export default Account