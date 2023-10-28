import { Link } from "react-router-dom"
import Logo from "/logoSolucionesAmericana.png"
import iconLogin from "../assets/login.png"
import iconCrear from "../assets/create.png"
import iconUsuarios from "../assets/users.png"
import "../styles/aside.css"

export function Aside() {
    return (
        <aside className="sidebar">
            <div className="top_container_sidebar">
                <picture>
                    <img id="logo" src={Logo} alt="Logo de Soluciones Americana" />
                </picture>
                <ul className="options_container">
                    <p id="title_menu-sidebar">Menu</p>
                    <li>
                        <Link to="/">
                            <img src={iconLogin} alt="Iniciar sesion" />
                            <p>Iniciar Sesion</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/crear">
                            <img src={iconCrear} alt="Crear usario" />
                            <p>Crear usuario</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/usuarios">
                            <img src={iconUsuarios} alt="Listar usuarios" />
                            <p>Listar usuario</p>
                        </Link>
                    </li>
                </ul>
            </div>
        </aside>
    )
}