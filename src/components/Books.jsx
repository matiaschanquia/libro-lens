import { useState } from "react";
import Book from "./Book";
import "./Books.css";
import { quitarTildes } from "../utils/quitarTildes";
import { DIFERENCE_PAGES } from "../constants";

const Books = (props) => {
    const [isModalActive, setIsModalActive] = useState(true);
    const [bookModal, setBookModal] = useState({})

    const orderBy = (books) => {
        const orderBooks = [...books].sort((a, b) => {
            let dataA;
            let dataB;
            if(props.orderBy == 0) {
                dataA = a.book.title.toLowerCase();
                dataB = b.book.title.toLowerCase();
            } else {
                dataA = a.book.year;
                dataB = b.book.year;
            }
            if(dataA < dataB) {
               return -1; 
            }
            if(dataA > dataB) {
                return 1;
            }
            return 0;
        })
        return orderBooks;
    }

    const yearPublication = (year) => {
        if(year < 0) return (`${year} A.d.C`);
        return year;
    }

    const openModal = (bookTitle) => {
        setIsModalActive(true);
        const getBookModal = props.books.filter(({book}) => {
            return book.title === bookTitle;
        })[0];
        setBookModal(getBookModal);
    }

    const closeModal = () => {
        setBookModal({});
        setIsModalActive(false);
    }

    const filterReading = (books) => {
        return books.filter((bookMain) => {
            return !props.reading.some((itemSecond) => {
                return itemSecond.book.title === bookMain.book.title;
            });
        });
    }

    const handleAddReading = () => {
        setIsModalActive(false);
        props.addBookReading(bookModal.book.title)
    }

    return (
        <section className="section-books">
            {
                orderBy(filterReading(props.books))
                    .filter(({book}) => {
                        return quitarTildes(book.title.toLowerCase()).includes(quitarTildes(props.filters.title.toLowerCase()));
                    })
                    .filter(({book}) => {
                        if(!props.filters.pages) return true;
                        return (book.pages >= props.amountPagesCurrent - DIFERENCE_PAGES && book.pages <= props.amountPagesCurrent + DIFERENCE_PAGES);
                    })
                    .filter(({book}) => {
                        if(props.filters.genre === "all") return true;
                        return book.genre === props.filters.genre;
                    })
                    .map(({book}) => (
                    <Book {...book} key={book.title} openModal={openModal} closeModal={closeModal} 
                          addBookReading={props.addBookReading}/>
                ))
            }
            {
                (isModalActive && bookModal.book) ? (
                    <div className="modal-article" onClick={closeModal}>
                        <div className="container-modal-article" onClick={e => e.stopPropagation()}>
                            <span className="btn-close-modal" onClick={closeModal}></span>
                            <button className="btn-add-reading modal"  onClick={handleAddReading} >
                                <ion-icon name="bookmark-outline"></ion-icon>
                            </button>
                            <img src={bookModal.book.cover} alt={bookModal.book.title} />
                            <div>
                                <h2>{bookModal.book.title}</h2>
                                <p>Autor: {bookModal.book.author.name}</p>
                                <p>Genero: {bookModal.book.genre}</p>
                                <p>Descripción: {bookModal.book.synopsis}</p>
                                <p>Año de publicación: {yearPublication(bookModal.book.year)}</p>
                                <p>Páginas: {bookModal.book.pages}</p>
                                <p>Otros libros del autor: </p>
                                <ul>
                                    {
                                        bookModal.book.author.otherBooks.map(book => (
                                            <li key={book}>{book}</li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                ) : ""
            }
        </section>
    );
}

export default Books;