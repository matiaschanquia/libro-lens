import { useEffect, useRef, useState } from "react";
import "./Book.css";

const Book = (props) => {
    const bookRef = useRef(null);

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                } else {
                    entry.target.classList.remove("visible");
                }
            });
        }, {threshold: 0.32,} // Ajusta según tus necesidades
    )

    useEffect(() => {
        observer.observe(bookRef.current);
        
        return () => {
            observer.disconnect();
        }
    }, []);

    const addReading = (e) => {
        e.stopPropagation();
        props.addBookReading(props.title);
    }

    return (
        <article className="article-book" ref={bookRef} onClick={() => props.openModal(props.title)} title="Más información">
            <img src={props.cover} alt={props.title}/>
            <h2>{props.title}</h2>
            <button className="btn-add-reading" onClick={addReading}  title="" >
                <ion-icon name="bookmark-outline"></ion-icon>
            </button>
        </article>
    );
}

export default Book;