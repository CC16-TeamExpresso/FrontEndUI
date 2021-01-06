import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import './register.css'



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
			<Button  variant="contained" onClick={registerUser}>
					Register
				</Button>
        



		</div>
	);
}
