import { NavLink } from 'react-router'
import './Header.css'
import logo from '../../assets/Logoa.svg'
import { userAtom } from '../../stores/userAtom'
import { auth } from '../../firebase.config'
import { signOut } from 'firebase/auth'
import { loginWithGoogle } from '../../utils/auth'
import { useAtom } from 'jotai'
import { Navigate } from 'react-router'

const Header = () => {

    const [user, setUser] = useAtom(userAtom);


    return (
        <header>
            <img src={logo} alt="logo" onClick={() => Navigate('/home')} />
            <nav>
                <ul id='navlinks'>
                    <li>
                        <NavLink className="isalink" to="/" >Inico</NavLink>
                    </li>
                    <li>
                        <NavLink className="isalink" to="/Learn" >Aprende Enfermedades</NavLink>
                        <ul className='submenu'>
                            <li>
                                <NavLink className="isalink" to="/Learn/CancerHigado">Cancer de Higado</NavLink>
                            </li>
                            <li>
                                <NavLink className="isalink" to="/Learn/Cirrocis">Cirrocis</NavLink>
                            </li>
                            <li>
                                <NavLink className="isalink" to="/Learn/HigadoGraso">Higado Graso</NavLink>
                            </li>
                            <li>
                                <NavLink className="isalink" to="/Learn/Hepatitis">Hepatitis</NavLink>
                            </li>

                        </ul>
                    </li>
                    <li>
                        <NavLink className="isalink" to="/Quiz" >Quiz</NavLink>
                        <ul className='submenu'>
                            <li>
                                <NavLink className="isalink" to="/Quiz/Presentar">Hacer Quiz</NavLink>
                            </li>
                            <li>
                                <NavLink className="isalink" to="/Quiz/Resultados">Ver Resultados</NavLink>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <NavLink className="isalink" to="/Nosotros" >Sobre Nosotros</NavLink>
                    </li>

                </ul>
            </nav>
            {user == null ? (
                <button onClick={loginWithGoogle}>Iniciar sesión</button>

            ) : (
                <div className="user-info">
                    <img src={user.photoURL ? user.photoURL : '/images/ficon.png'} alt="User Avatar" />
                    <p>{user.email.split('@')[0]}</p>
                    <button onClick={() => signOut(auth)}>Cerrar sesión</button>
                </div>

            )}


        </header>
    )
}

export default Header