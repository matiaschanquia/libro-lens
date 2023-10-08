import { humanizarFecha } from "../utils/dayjs";
import "./BookRead.css";

const BookRead = (props) => {

    const styles = {
        width: `${100 / props.readingLength}%`
    }


    return (
        <div className="book-read" style={styles}>
            <button className="btn-check-book">
                <ion-icon name="checkmark-done-outline"></ion-icon>
            </button>
            <img src={props.cover} alt={props.title} />
            <div className="container-data">
                <h2>{props.title}</h2>
                <p>{humanizarFecha(props.date)}</p>
            </div>
        </div>
    )
}

export default BookRead;