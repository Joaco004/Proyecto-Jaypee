import { Link } from "react-router-dom"
import "../styles/components/Footer.css"

const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="site-footer-inner">
                <p className="site-footer-copy">
                    © JayPee - Sitio desarrollado por {" "}
                    <a 
                    href="https://www.linkedin.com/in/joaquin-garinei-892654304/"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                        Joaquin Garinei
                    </a>
                </p>

                <div>

                </div>
                <nav>
                    <Link to="/menu">Menú</Link>
                    <Link to="/about">Nosotros</Link>
                    <Link to="/order">Pedido Online</Link>
                </nav>
            </div>
        </footer>
    )
} 

export { Footer };