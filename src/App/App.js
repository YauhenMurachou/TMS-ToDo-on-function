import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route	
} from "react-router-dom";

import './App.css';

// import Login from '../pages/Login/Login';
// import Registration from "../pages/Registration/Registration";
// import Tasks from "../pages/Tasks/Tasks";

import { Login, Registration, Tasks } from '../pages'

import Navigation from "../components/navigation/Navigation";

import ToDoApp from "../components/ToDoApp/ToDoApp";

class App extends React.Component {
	render() {
		return <Router>

			<Route path="/">
				<Navigation/>
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
