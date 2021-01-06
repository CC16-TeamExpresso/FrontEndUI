import React from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './Home.css'

export default function Home() {
	return (
		<div className="App">
			<header className="App-header">
				<h1 className="title">Peekify</h1>
				<div className="buttons">
					<Link className='login-button'  to="/login">
						Login
					</Link>
					<br/>
					<Link className='register-button' to="/register">
						Register
					</Link>
				</div>
			</header>
		</div>
	);
}
