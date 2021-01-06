import React, { useState } from 'react';

import './register.css'
import logo from '../images/logo.png';
declare module '*.png';



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
        



		</div>
	);
}
