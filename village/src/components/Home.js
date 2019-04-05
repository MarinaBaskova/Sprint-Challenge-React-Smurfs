import React from 'react';

function Home(props) {
	const navigateToSmurfs = (e) => {
		e.preventDefault();
		props.history.push('/smurfs-list');
	};
	return (
		<div className="homeWrapper">
			<h2>Welcome to Smurf's village</h2>
			<button onClick={navigateToSmurfs} className="homeBtn">
				All Smurfs
			</button>
		</div>
	);
}

export default Home;
