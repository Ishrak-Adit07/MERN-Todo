import React, { useContext } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { UserContext } from '../Context/UserContext'

const Home = () => {

    const {user, setUser} = useContext(UserContext);
    console.log(user);

    const navigate = useNavigate();

    const handleLogOut = () =>{
        
        if(confirm("Are you sure you want to log out?")){

            setUser({
                email:null, posts:[]
            });
    
            localStorage.removeItem('email');
            localStorage.removeItem('webToken');
    
            navigate("/");

        }
    }

  return (
    <>
        <header className="bg-indigo-500 text-white">

            <nav className="flex items-center justify-between p-4">
                <Link title="Home" to="/" className="fa-solid fa-house-chimney nav-link"></Link>

                {user.email ? (
                    <div className="flex items-center gap-2">
                        <Link title="Create post" to="/createPost" className="fa-solid fa-circle-plus nav-link"></Link>
                        <Link title="Dashboard" to="/dashboard" className="fa-solid fa-user nav-link"></Link>
                        <button title='Log out' onClick={handleLogOut} className='fa-solid fa-right-from-bracket nav-link'></button>
                    </div>
                ) : (
                    <div className="flex items-center gap-2">
                        <Link title="Log in" to="/login" className="fa-solid fa-right-to-bracket nav-link"></Link>
                        <Link title="Register" to="/register" className="fa-solid fa-registered nav-link"></Link>
                    </div>
                )}

            </nav>

        </header>

        <main className="p-4 items-center">

            <Outlet/>
        
        </main>


    </>
  )
}

export default Home

//This Home component would have been better called "Layout"
