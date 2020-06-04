import React from "react"
import { Location } from "@reach/router"
import App from "./src/components/App"

export const wrapRootElement = ({ element }) => {
  return (
    <Location>
      {location => <App element={element} location={location} />}
    </Location>
  )
}