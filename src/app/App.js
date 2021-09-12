import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './App.css'

import { Routes } from '../utils/routes'
// import { AuthorizeRoute, NotAuthorizeRoute } from '../components/routes'
import { Navigation } from '../components'
import { Home, Login, Registration, Tasks, Users } from '../pages'

const App = () => {
	
	return (
		<Router>
			{/* <NotAuthorizeRoute path={Routes.SignInRoute} component={Login} /> */}
				
			<Route exact path={Routes.HomeRoute}>
				<Home />
			</Route>

			<Route exact path={Routes.SignInRoute}>
    		<Login />
    	</Route>

			{/* <NotAuthorizeRoute path={Route.SignUpRoute} component={Registration} /> */}
				
			<Route exact path={Routes.SignUpRoute}>
    		<Registration />
    	</Route>

			{/* <AuthorizeRoute path={Route.TasksRoute} component={Tasks} /> */}
				
			<Route exact path={Routes.TasksRoute}>
      	<Navigation />
      	<Tasks />
    	</Route>

			{/* <AuthorizeRoute path={Route.UsersRoute} component={Users} /> */}
				
			<Route exact path={Routes.UsersRoute}>
      	<Navigation />
      	<Users />
    	</Route>
		</Router>
	)
}

export default App;
