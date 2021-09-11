import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom";

import './App.css';

import { SignIn, Registration, Tasks, Users } from '../pages'
import { Navigation, ToDoApp, ToDoList } from '../components';
import { Routes } from '../utils/routes'


class App extends React.Component {
	render() {
		return <Router>

			<Route path={Routes.HomeRoute}>
				<Navigation />
			</Route>

			<Route exact path={Routes.SignInRoute}>
				<SignIn />
			</Route>

			<Route exact path={Routes.SignUpRoute}>
				<Registration />
			</Route>

			<Route exact path={Routes.TasksRoute}>
				<Tasks />
				<ToDoApp />
			</Route>

			<Route exact path={Routes.UsersRoute}>
				<Users />
			</Route>

		</Router>
	}
}

export default App;
