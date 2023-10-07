import "./Book.css";

const Book = (props) => {
    return (
        <article className="article-book" onClick={e => console.log("click en el article")}>
            <img src={props.cover} alt={props.title} />
            <h2>{props.title}</h2>
            <button className="btn-add-reading" onClick={e => console.log("click en el boton")}>
                <ion-icon name="bookmark-outline"></ion-icon>
            </button>
        </article>
    );
}

export default Book;