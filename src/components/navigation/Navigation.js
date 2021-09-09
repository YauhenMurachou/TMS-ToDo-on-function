import React from "react";
import {

	Link
} from "react-router-dom";

import '../navigation/Navigation.css'

const Navigation = () => {
	return <div className='nav-container'>

		<div>
			<Link to='/'>Home</Link>
		</div>
		<div>
			<Link to='/login'>
				Login
			</Link>
		</div>
		<div>
			<Link to='/registration'>Registration</Link>
		</div>
		<div>
			<Link to='/tasks'>Tasks</Link>
		</div>
	</div>
}

export default Navigation;