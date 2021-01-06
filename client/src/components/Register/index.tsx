import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';

export default function Register() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	async function registerUser() {
		const res = await fetch('http://localhost:8050/api/register', {
			method: 'POST',
			body: JSON.stringify({
				email,
				password,
			}),
		}).then((t) => t.json());
		console.log(res);
	}

	return (
		<div className="form">
			<h1>Register</h1>
			<form className="register-fields">
				<TextField
					fullWidth
					placeholder="you@email.com"
					label="Your Email"
					value={email}
					onChange={(e: any) => setEmail(e.target.value)}
					variant="outlined"
				/>
				<TextField
					fullWidth
					value={password}
					onChange={(e: any) => setPassword(e.target.value)}
					placeholder="p@$$w0rd"
					label="Password"
					variant="outlined"
				/>
				<Button color="primary" variant="contained" onClick={registerUser}>
					Register
				</Button>
			</form>
		</div>
	);
}
