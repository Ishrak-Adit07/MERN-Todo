import React, { useState } from 'react';
import Alert from '../../components/Alert';
import { registerUser } from '../../Controllers/user.controller';

const Register = () => {
  //Error state
  const [error, setError] = useState(null);

  //Form data states
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: ""
  })


  //Handle Register
  const handleRegister = async(e) =>{
    e.preventDefault();
    console.log(formData);

    try {
      await registerUser(formData.email, formData.password, formData.confirmPassword);
    } catch (e) {
      setError(e.message);
    }

    // setFormData({
    //   email:"",
    //   password:"",
    //   confirmPassword:""
    // })
  }


  return (
    <section className="card">

        <h1 className="title">Create new account</h1>

        <form onSubmit={handleRegister} className="justify-center items-center h-screen">

            <input type="email" 
                   placeholder="Email address" 
                   className="input" 
                   autoFocus 
                   value={formData.email} 
                   onChange={(e)=>{setFormData({...formData, email: e.target.value})}} />

            <input type="password" 
                   placeholder="Password" 
                   className="input" 
                   value={formData.password}
                   onChange={(e)=>{setFormData({...formData, password: e.target.value})}} />

            <input type="password" 
                   placeholder="Confirm Password" 
                   className="input" 
                   value={formData.confirmPassword}
                   onChange={(e)=>{setFormData({...formData, confirmPassword: e.target.value})}} />

            <button type="submit" className="btn">Register</button>
        </form>

        {error && <Alert msg={error}/>}

    </section>
  );
}

export default Register;
