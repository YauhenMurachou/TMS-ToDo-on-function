import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom";

import './App.css';

import { Login, Registration, Tasks } from '../pages'
import { Navigation, ToDoApp, ToDoList } from '../components';


class App extends React.Component {
	render() {
		return <Router>

			<Route path="/">
				<Navigation />
			</Route>

			<Route exact path="/login">
				<Login />
			</Route>

			<Route exact path="/registration">
				<Registration />
			</Route>

			<Route exact path="/tasks">
				<Tasks />
				<ToDoApp />
			</Route>

		</Router>
	}
}

export default App;
