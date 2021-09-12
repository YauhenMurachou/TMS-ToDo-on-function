import React from "react"
import { Route } from 'react-router-dom'

 import { Navigation } from '../../../components'

const AuthorizeRoute = (props) => {

  const { component: Component, path } = props

  console.log('AuthorizeRoute path ', path)

  return (
    <>
      <Route exact path={path}>
        <Navigation />
        <Component />
      </Route>
    </>
  )
}

export default AuthorizeRoute
