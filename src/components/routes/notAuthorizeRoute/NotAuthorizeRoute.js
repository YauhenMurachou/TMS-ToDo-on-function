import React from "react"
import { Route } from 'react-router-dom'


const NotAuthorizeRoute = ({component: Component, ...rest}) => {

  return (
    <Route
      {...rest}
      render={(props) => <Component /> }
    />
  )
}

export default NotAuthorizeRoute
