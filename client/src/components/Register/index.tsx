import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import './register.css';
import { apiCall } from '../../utility';

export default function Register() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	async function registerUser() {
		const res = await apiCall('/api/register', { email, password });
		console.log(res);
	}

	return (
		<div className="Login">
			<div className="title">Peekify</div>
			<label className="password">
				Email
				<br />
				<input
					type="text"
					className="email-field"
					placeholder="you@email.com"
					value={email}
					onChange={(e: any) => setEmail(e.target.value)}
				></input>
			</label>
			<label className="password">
				Password
				<br />
				<input
					type="text"
					className="password-field"
					value={password}
					onChange={(e: any) => setPassword(e.target.value)}
					placeholder="p@$$w0rd"
				></input>
			</label>
			<br />
			<button className="register-button" onClick={registerUser}>
				Register
			</button>
		</div>
	);
}
