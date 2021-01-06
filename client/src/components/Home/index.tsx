import React from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';


export default function Home() {
	return (
		<div className="App">
			<header className="App-header">
				<h1>peekify</h1>
				<div className="buttons">
					<Button variant="contained" component={Link} to="/login">
						Login
					</Button>
					<Button variant="contained" component={Link} to="/register">
						Register
					</Button>
				</div>
			</header>
		</div>
	);
}
