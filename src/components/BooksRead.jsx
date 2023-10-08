import { useEffect, useState } from "react";
import BookRead from "./BookRead";
import "./BooksRead.css";


const BooksRead = (props) => {
    
    const [index, setIndex] = useState(0);
    const [widthItems, setWidthItems] = useState(30);
    const readingLength = props.reading.length;
    
    const stringTranslate = (cantidad) => {
        return `translateX(${-100 / readingLength * cantidad}%)`;
    }

    const styles = {
        width: `${readingLength * widthItems}%`,
        transform: stringTranslate(index),
    }

    const handleLeft = () => {
        if(index === 0) return;
        setIndex(index - 1);
    }

    const handleRight = () => {
        if(index === readingLength - 1) return;
        setIndex(index + 1);
    }

    const resizeContainer = () => {
        if(window.innerWidth < 550) {
            setWidthItems(70);
        } else {
            setWidthItems(30);
        }
    }

    useEffect(() => {
        resizeContainer()
        window.addEventListener("resize", (e) => {
            resizeContainer()
        })
    }, [])

    return (
        <div className="books-read" >
            <div className="container-books-read" style={styles}>
                {
                    [...props.reading]
                        .reverse()
                        .map(({book}) => (
                            <BookRead {...book} key={book.title} readingLength={readingLength}/>
                        ))
                }
            </div>
            {
                props.reading.length ? 
                    <div className="btns-mover-books-read">
                        <button className="btn left" onClick={handleLeft} disabled={index === 0}>
                            <ion-icon name="arrow-back-circle-outline"></ion-icon>
                        </button>
                        <button className="btn right" onClick={handleRight} disabled={index === readingLength - 1}>
                            <ion-icon name="arrow-forward-circle-outline"></ion-icon>
                        </button>
                    </div> :
                    ""
            }
        </div>
    )
}

export default BooksRead;