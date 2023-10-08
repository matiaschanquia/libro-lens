import "./Footer.css";

const Footer = (props) => {
    
    
    return (
        <footer className="footer">
            <div className="redes">
                <a href="https://www.linkedin.com/in/matias-chanquia/" target="_blank" rel="noreferrer">
                    <img src="/assets/linkedin.png" alt="logo linkedin"/>
                </a>
                <a href="https://github.com/matiaschanquia" target="_blank" rel="noreferrer">
                    <img src="/assets/github.png" alt="logo github"/>
                </a>
            </div>
            <p>Proyecto inspirado en una <a href="https://github.com/midudev/pruebas-tecnicas/tree/main/pruebas/01-reading-list" target="_blank" rel="noreferrer">prueba técnica compartida por Midudev</a></p>
            <p>&copy; Copyright Libro Lens - Matias Chanquia Dev</p>
        </footer>
    );
}

export default Footer;