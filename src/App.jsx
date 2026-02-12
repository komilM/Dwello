import React from 'react'
import "./App.css"
import { NavLink, Route, Routes, useLocation } from 'react-router-dom'
import Home from './home/Home'
import Products from './products/Products'
import logo from "./assets/logo 1.png"
import Page from './pages/Page'


const App = () => {

  const location = useLocation();

  return (
    <div>

      {/* Nav */}

      {location.pathname !== "/page" && (
        <nav>
          <img src={logo} alt="" />
          <div className="nav-menu">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/products">Products</NavLink>
            <p>Agents</p>
            <p>Contact</p>
          </div>
          <button>Sign up</button>
        </nav>
      )}

      {/* Nav tugadi */}

      {/* Routes */}

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/page' element={<Page/>} />
      </Routes>

      {/* Routes tugadi */}

    </div>
  )
}

export default App
