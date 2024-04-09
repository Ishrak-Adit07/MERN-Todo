import React, { useState } from 'react';
import Alert from '../../components/Alert';

const Login = () => {

  // Error state
  const [error, setError] = useState(null);

  // Form data states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Handle Log in
  const handleLogin = (e) => {
    e.preventDefault();
    console.log(email, password);
    
    // setEmail("");
    // setPassword("");
  }

  return (
    <section className="card">

        <h1 className="title">Login to your account</h1>

        <form onSubmit={handleLogin} className="justify-center items-center h-screen">

            <input type="email" 
                   placeholder="Email address" 
                   className="input" 
                   autoFocus 
                   value={email} 
                   onChange={(e) => setEmail(e.target.value)} />

            <input type="password"
                   placeholder="Password" 
                   className="input" 
                   value={password}
                   onChange={(e) => setPassword(e.target.value)} />

            <button type="submit" className="btn">Login</button>
        </form>

        {error && <Alert msg={error}/>}
    </section>
  );
}

export default Login;
