import React , {useState} from 'react';

import './login.css';
import logo from '../images/logo.png';
declare module '*.png';

function Login() {
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');


	async function loginUser() {
		const res = await fetch
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
			<button  className="login-button" onClick={loginUser}>
					Login
				</button>
		</div>
	);
}

export default Login;
