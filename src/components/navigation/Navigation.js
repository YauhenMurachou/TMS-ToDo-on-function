import React from "react";
import { Link, useHistory } from "react-router-dom";

import '../navigation/Navigation.css'

import { Routes } from '../../utils/routes'

const Navigation = () => {

const history = useHistory();

	return <div className='nav-container'>

		<div>
			<Link to={Routes.HomeRoute}>Home</Link>
		</div>
		<div>
			<Link to={Routes.SignInRoute}>Login</Link>
		</div>
		<div>
			<Link to={Routes.SignUpRoute}>Registration</Link>
		</div>
		<div>
			<Link to={Routes.TasksRoute}>Tasks</Link>
		</div>
		<div>
			<Link to={Routes.UsersRoute}>Users</Link>
		</div>
	</div>
}

export default Navigation;