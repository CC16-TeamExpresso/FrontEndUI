import React from 'react';

import './login.css';

function Login() {
  return (
    <div className="Login">
        <div className="title">Peekify</div>
        <label >User Name<br/>
        <input type="text" id='username'></input>
        </label><br />
        <label >Password<br/> 
        <input type="text" id='password'></input>
        </label>
        
    </div>
  );
}

export default Login;
