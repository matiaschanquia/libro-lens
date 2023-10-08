import Books from "./Books";
import Filters from "./Filters";
import "./Main.css";

const Main = (props) => {
    return (
        <main className="main">
            <Filters generos={props.generos} amountPages={props.amountPages} 
                     filters={props.filters} handleOrderBy={props.handleOrderBy}
                     handlePages={props.handlePages} handleTitle={props.handleTitle}
                     amountPagesCurrent={props.amountPagesCurrent} handleResetFilters={props.handleResetFilters}
                     handleAmountPagesCurrent={props.handleAmountPagesCurrent} handleGenre={props.handleGenre}/>
            <Books books={props.books} orderBy={props.orderBy} addBookReading={props.addBookReading} 
                   reading={props.reading} filters={props.filters} amountPagesCurrent={props.amountPagesCurrent}/>
        </main>
    )
}

export default Main;