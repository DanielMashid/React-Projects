import { Component } from 'react';
import User from './User';

import classes from './Users.module.css';

const DUMMY_USERS = [
	{ id: 'u1', name: 'Max' },
	{ id: 'u2', name: 'Manuel' },
	{ id: 'u3', name: 'Julie' },
];

class Users extends Component {
	constructor() {
		super(); // This is required to call the constructor of the parent class (Component) to initialize the component properly
		this.state = {
			showUsers: true,
		};
	}

	toggleUsersHandler() {
		// this.state.showUsers = !this.state.showUsers; // This is not the correct way to update state in React Class Components

		// this will be merged with the current state, and that's how we can update the state
		this.setState((curState) => {
			return { showUsers: !curState.showUsers };
		});
	}

	render() {
		const usersList = (
			<ul>
				{DUMMY_USERS.map((user) => (
					<User key={user.id} name={user.name} />
				))}
			</ul>
		);

		return (
			<div className={classes.users}>
				<button onClick={this.toggleUsersHandler.bind(this)}>
					{/* <button onClick={() => this.toggleUsersHandler()}> // This is also a valid way to bind the context of 'this' */}
					{this.state.showUsers ? 'Hide' : 'Show'} Users
				</button>
				{this.state.showUsers && usersList}
			</div>
		);
	}
}

// const Users = () => {
// 	const [showUsers, setShowUsers] = useState(true);

// 	const toggleUsersHandler = () => {
// 		setShowUsers((curState) => !curState);
// 	};

// 	const usersList = (
// 		<ul>
// 			{DUMMY_USERS.map((user) => (
// 				<User key={user.id} name={user.name} />
// 			))}
// 		</ul>
// 	);

// 	return (
// 		<div className={classes.users}>
// 			<button onClick={toggleUsersHandler}>{showUsers ? 'Hide' : 'Show'} Users</button>
// 			{showUsers && usersList}
// 		</div>
// 	);
// };

export default Users;
