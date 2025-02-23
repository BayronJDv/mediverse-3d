import React from 'react'
import { NavLink } from 'react-router'
import './Header.css'


const Heade = () => {
  return (
    <header>
        <img src="src\assets\Logoa.svg" alt="logo" />
        <nav>
            <ul id='navlinks'>
                <li>
                    <NavLink  className="isalink" to="/" >Home</NavLink>
                </li>
                <li>
                    <NavLink className="isalink"  to="/quiz" >quiz</NavLink>
                </li>
                <li>
                    <NavLink className="isalink" to="/about" >About</NavLink>
                </li>
                
            </ul>
        </nav>
        <button >Sign up</button>
        
        
        
        
        
        
    </header>
  )
}

export default Heade