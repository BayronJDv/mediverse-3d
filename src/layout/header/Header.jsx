import React from 'react'
import { NavLink } from 'react-router'
import './Header.css'
import logo from '../../assets/Logoa.svg'

const Header = () => {
  return (
    <header>
        <img src={logo} alt="logo" />
        <nav>
            <ul id='navlinks'>
                <li>
                    <NavLink  className="isalink" to="/" >Home</NavLink>
                </li>
                <li>
                    <NavLink className="isalink"  to="/Learn" >Learn diseases</NavLink>
                    <ul className='submenu'>
                        <li>
                            <NavLink className="isalink" to="/Learn/Cirrocis">Cirrocis</NavLink>
                        </li>
                        <li>
                            <NavLink className="isalink" to="/Learn/HigadoGraso">Higado Graso</NavLink>
                        </li>
                        <li>
                            <NavLink className="isalink" to="/Learn/Hepatitis">Hepatitis</NavLink>
                        </li>
                        <li>
                            <NavLink className="isalink" to="/Learn/CancerHigado">Cancer de Higado</NavLink>
                        </li>
                    </ul>
                </li>
                <li>
                    <NavLink className="isalink" to="/Quiz" >Quiz</NavLink>
                </li>
                <li>
                    <NavLink className="isalink" to="/About" >About</NavLink>
                </li>
                
            </ul>
        </nav>
        <button >Sign up</button>
        
        
        
        
        
        
    </header>
  )
}

export default Header