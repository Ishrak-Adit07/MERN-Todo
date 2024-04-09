import React, { useState } from 'react';
import Alert from '../../components/Alert';

const Register = () => {
  //Error state
  const [error, setError] = useState(null);

  //Form data states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //Handle Log in
  const handleRegister = (e) =>{
    e.preventDefault();
  }


  return (
    <section className="card">

        <h1 className="title">Create new account</h1>

        <form className='justify-center items-center h-screenitems-center'>

            <input type="email" 
                   placeholder="Email address" 
                   className="input" 
                   autoFocus 
                   value={email} 
                   onChange={(e)=>{setEmail(e.target.value)}} />

            <input type="password" 
                   placeholder="Password" 
                   className="input" 
                   value={password}
                   onChange={(e)=>setPassword(e.target.value)} />

            <button className="btn" onSubmit={(e)=>{handleRegister(e)}}>Login</button>
        </form>

        {error && <Alert msg={error}/>}

    </section>
  );
}

export default Register;
