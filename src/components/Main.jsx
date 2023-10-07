import Books from "./Books";
import Filters from "./Filters";
import "./Main.css";

const Main = (props) => {
    return (
        <main className="main">
            <Filters generos={props.generos}/>
            <Books books={props.books}/>
        </main>
    )
}

export default Main;