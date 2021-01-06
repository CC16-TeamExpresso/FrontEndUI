import React, { useState } from 'react';
<<<<<<< HEAD

import './register.css'
import logo from '../images/logo.png';
declare module '*.png';

=======
>>>>>>> 076725bcd1449e021a13eb6190f0418ebdc9b5fa

import './register.css';
import { apiCall } from '../../utility';

export default function Register() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	async function registerUser() {
		const res = await apiCall('/api/register', { email, password });
		console.log(res);
	}

<<<<<<< HEAD
	return (  

		<div className="Login">
      	<img className='logo 'src={logo} alt="logo"></img>
        <div className="title">Peekify</div>
            <label className='password'>Email<br/>
            <input type="text"
								className='email-field'
								placeholder="you@email.com"
								value={email}
								onChange={(e: any) => setEmail(e.target.value)}></input>
            </label>
            <label className='password'>Password<br/> 
            <input type="text" 
								className='password-field'
								value={password}
								onChange={(e: any) => setPassword(e.target.value)}
								placeholder="p@$$w0rd"></input>
            </label>
            <br />
			<button  className="register-button" onClick={registerUser}>
					Register
				</button>
        



=======
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
>>>>>>> 076725bcd1449e021a13eb6190f0418ebdc9b5fa
		</div>
	);
}
