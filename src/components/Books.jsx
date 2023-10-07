import Book from "./Book";
import "./Books.css";

const Books = (props) => {
    return (
        <section className="section-books">
            {
                props.books.map(({book}) => (
                    <Book title={book.title} key={book.title}/>
                ))
            }
        </section>
    );
}

export default Books;