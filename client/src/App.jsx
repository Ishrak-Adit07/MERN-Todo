import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/users/Login';
import Register from './pages/users/Register';
import Dashboard from './pages/users/Dashboard';
import PostHome from './pages/posts/PostHome';

const App = () => {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} >

          <Route index element={<PostHome />} />

          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="dashboard" element={<Dashboard />} />

        </Route>

      </Routes>

    </BrowserRouter>
  )
};

export default App
