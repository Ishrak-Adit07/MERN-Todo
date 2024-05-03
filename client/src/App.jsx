import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/users/Login';
import Register from './pages/users/Register';
import Dashboard from './pages/users/Dashboard';
import PostHome from './pages/posts/PostHome';
import CreatePost from './pages/posts/CreatePost';
import UpdatePost from './pages/posts/UpdatePost';
import AuthRoutes from './RoutesProtection/AuthRoutes';
import GuestRoutes from './RoutesProtection/GuestRoutes';

const App = () => {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} >

          <Route index element={<PostHome />} />

          <Route element={<AuthRoutes />}>
    
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="createPost" element={<CreatePost />} />
            <Route path="updatePost" element={<UpdatePost />} />

          </Route>

          <Route element={<GuestRoutes />}>

            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />

          </Route>


        </Route>

      </Routes>

    </BrowserRouter>
  )
};

export default App
