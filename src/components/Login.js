import './login.css'
import React, { useState } from 'react';

const Login = () => {
    const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className='background'>
        <div>
      <div className='center'>
        <form className='login-form'>
          <div className='header'>
        <h1>SMART CAMPUS COMMAND CENTER</h1>
        </div>
       <h2>
                Sign In
           </h2>  
            <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />   
        <button type="submit">Login</button>    
           </form>
        </div>
      </div>
    </div>
  )
}

export default Login
