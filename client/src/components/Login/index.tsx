import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import { apiCall } from '../../utility';
import { useHistory } from 'react-router-dom';

export default function Register() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const history = useHistory();

	async function loginUser() {
		const res = await apiCall('/api/login', { email, password });

		if (res.status === 'ok') {
			localStorage.setItem('token', res.data);
			alert('You are logged in');
			history.push('/profile');
		} else {
			alert(res.error);
		}
	}

	return (
		<div>
			<h1>Login</h1>
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
				<Button color="primary" variant="contained" onClick={loginUser}>
					login
				</Button>
			</form>
		</div>
	);
}
