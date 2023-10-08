import { useEffect, useState } from "react";
import "./Filters.css";
import { DIFERENCE_PAGES } from "../constants";

const Filters = (props) => {

    const [pagesCurrentState, setPagesCurrentState] = useState(15);

    const handlePagesCurrent = (e) => {
        const pages = e.target.value;
        setPagesCurrentState(pages);
        props.handleAmountPagesCurrent(pages);
        // console.log(pages);
    }

    useEffect(() => {
        setPagesCurrentState(props.amountPages.min);
        // console.log(props.amountPages.min);
    }, [props.amountPages])

    return (
        <section className="section-filters">
            <h3>Filtros</h3>
            <h4>Búsqueda:</h4>
            <input type="text" placeholder="Ingrese el libro..." name="title" onChange={props.handleTitle} value={props.filters.title}/>
            <h4>Cantidad de páginas:</h4>
            <div className="pages">
                <button className="btn-pages" onClick={props.handlePages}>{props.filters.pages ? "Desactivar" : "Activar" }</button>
                {
                    !props.filters.pages ||
                    <div>
                        <input type="range" min={props.amountPages.min} max={props.amountPages.max} step={1} name="pages" onChange={handlePagesCurrent} value={pagesCurrentState} />
                        <p>Entre {(pagesCurrentState - DIFERENCE_PAGES) < 0 ? pagesCurrentState : pagesCurrentState - DIFERENCE_PAGES} y {Number(pagesCurrentState) + DIFERENCE_PAGES} páginas</p>
                    </div>
                }
            </div>
            <h4>Género:</h4>
            <select name="generos" onChange={props.handleGenre} value={props.filters.genre}>
                <option value="all">Todos los géneros</option>
                {
                    props.generos.map(genero => (
                        <option value={genero} key={genero}>{genero}</option>
                    ))
                }
            </select>
            <h4>Ordenar por:</h4>
            <select name="generos" onChange={props.handleOrderBy}>
                <option value="0">Abecedario</option>
                <option value="1">Año de publicación</option>
            </select>
            <button className="btn-clear" onClick={props.handleResetFilters}>Limpiar</button>
        </section>
    )
}

export default Filters;