import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/users/Login';
import Register from './pages/users/Register';

const App = () => {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} >

          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />

        </Route>

      </Routes>

    </BrowserRouter>
  )
};

export default App
