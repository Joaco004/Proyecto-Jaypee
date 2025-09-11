import { Link, NavLink } from "react-router-dom"
import logo from "../assets/JayPee.png"
import "../styles/components/Header.css"

const Header = () => {
    const [open, setOpen] = useState(false);

    const navLinkClass = ({ isActive }) =>
        isActive ? "nav__link active" : "nav__link";
    return (
        <header className="cg-header">
            <div className="cg-header-inner">
                <Link to="/" className="brand" aria-label="JayPee - Inicio">
                <img src={logo} alt="JayPee" className="brand-logo"/>
                </Link>

                <div className="header-action">
                    <button
                    className="nav-toggle"
                    aria-label="Abrir menú"
                    onClick={() => setOpen((v) => !v)}
                    >
                      ☰   
                    </button>
                </div>

                <nav className="">
                    <ul>
                        <li><NavLink to="/" className={navLinkClass}>Inicio</NavLink></li>
                        <li><NavLink to="/Menu" className={navLinkClass}>Menú</NavLink></li>
                        <li><NavLink to="/About" className={navLinkClass}>Nosotros</NavLink></li>
                        <li><NavLink to="/Order" className={navLinkClass}>Pedido Online</NavLink></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export { Header };