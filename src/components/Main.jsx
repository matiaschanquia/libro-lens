import Books from "./Books";
import Filters from "./Filters";
import "./Main.css";

const Main = (props) => {
    return (
        <main className="main">
            <Filters generos={props.generos} amountPages={props.amountPages} 
                     filters={props.filters} handleOrderBy={props.handleOrderBy}
                     handlePages={props.handlePages} />
            <Books books={props.books} orderBy={props.orderBy}/>
        </main>
    )
}

export default Main;