import React from 'react';
import './login.css';




const Login: React.FC = () => {

  return (
    <div className="Login">
      
        <div className="title">Peekify</div>
            <label className='password'>Account Name<br/>
            <input type="text"></input>
            </label><br />
            <label className='password'>Password<br/> 
            <input type="text" ></input>
            </label>
            <br />
        <button className='loginButton'>Login</button>
        <button className='registerButton'>Register</button>
        
    </div>
  );
}

export default Login;
