import React from 'react';

const Login = () => {
  return (
    <section className="card">

        <h1 className="title">Login to your account</h1>

        <form className='justify-center items-center h-screenitems-center'>
            <input type="email" placeholder="Email address" className="input" autoFocus />
            <input type="password" placeholder="Password" className="input" />

            <button className="btn">Login</button>
        </form>

    </section>
  );
}

export default Login;
