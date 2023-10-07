import "./Header.css"

const Header = (props) => {
    return (
        <header className="header">
            <div className="container-header">
                <h1>Libro Lens</h1>
                <button className="btn-reading">
                    <span className="amount-reading">50</span>
                    <ion-icon name="bookmarks-outline"></ion-icon>
                </button>
            </div>
        </header>
    )
}

export default Header;