import { useState } from "react";
import "./Header.css";
import BooksRead from "./BooksRead";

const Header = (props) => {
    const [isModalActive, setIsModalActive] = useState(false);

    const handleOpenReading = () => {
        setIsModalActive(true);
    }

    const handleCloseReading = () => {
        setIsModalActive(false);
    }

    return (
        <header className="header">
            <div className="container-header">
                <h1><img src="/assets/logo.png" alt="Libro Lens" /> Libro Lens</h1>
                <button className="btn-reading" onClick={handleOpenReading}>
                    <span className="amount-reading">{props.reading.length}</span>
                    <ion-icon name="bookmarks-outline"></ion-icon>
                </button>
            </div>
            {   
                isModalActive && 
                <div className="modal-reading" onClick={handleCloseReading}>
                    <div className="container-modal-reading" onClick={e => e.stopPropagation()}>
                        <span className="btn-close-modal reading" onClick={handleCloseReading}></span>
                        <h2>{props.reading.length ? "Lista para leer" : "No has agregado elementos a leer"}</h2>
                        <BooksRead reading={props.reading}/>
                    </div>
                </div>
            }
        </header>
    )
}

export default Header;