import React from 'react';

import './login.css';
import logo from '../images/logo.png';
declare module '*.png';

function Login() {
	return (
		<div className="Login">
			<img className='logo 'src={logo} alt="logo"></img>
			<div className="title">Peekify</div>
		</div>
	);
}

export default Login;
