import React, { Component } from 'react';
import axios from 'axios';
import { Route, NavLink } from 'react-router-dom';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import Home from './components/Home';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			smurfs: []
		};
	}

	componentDidMount() {
		axios
			.get('http://localhost:3333/smurfs')
			.then((res) => {
				this.setState({ smurfs: res.data });
			})
			.catch((err) => {
				console.log(err);
			});
	}

	addSmurf = (newSmurf) => {
		console.log(newSmurf);
		axios
			.post('http://localhost:3333/smurfs', newSmurf)
			.then((res) => {
				this.setState({ smurfs: res.data });
				this.history.push('/smurfs-list');
			})
			.catch((err) => {
				console.log(err);
			});
	};

	deleteSmurf = (id) => {
		axios
			.delete(`http://localhost:3333/smurfs/${id}`)
			.then((res) => {
				console.log(res);
				this.setState({ smurfs: res.data });
				this.history.push('/smurfs-list');
			})
			.catch((err) => {
				console.log(err);
			});
	};

	// add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
	// Notice what your map function is looping over and returning inside of Smurfs.
	// You'll need to make sure you have the right properties on state and pass them down to props.
	render() {
		return (
			<div className="App">
				<nav>
					<div className="navLinks">
						<NavLink exact to="/">
							Home
						</NavLink>
						<NavLink exact to="/new-smurf">
							Add New Smurf
						</NavLink>
						<NavLink exact to="/smurfs-list">
							Smurfs
						</NavLink>
					</div>
				</nav>
				<Route exact path="/" component={Home} />
				<Route
					exact
					path="/smurfs-list"
					render={(props) => <Smurfs {...props} smurfs={this.state.smurfs} deleteSmurf={this.deleteSmurf} />}
				/>
				<Route path="/new-smurf" render={(props) => <SmurfForm {...props} addSmurf={this.addSmurf} />} />
			</div>
		);
	}
}

export default App;
