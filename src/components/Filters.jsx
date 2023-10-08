import { useEffect, useState } from "react";
import "./Filters.css";

const Filters = (props) => {
    const [amountPages, setAmountPages] = useState(props.amountPages.min);
    
    const handlePages = e => {
        setAmountPages(e.target.value);
    }

    useEffect(() => {
        setAmountPages(props.amountPages.min)
    }, [props.amountPages])

    return (
        <section className="section-filters">
            <h3>Filtros</h3>
            <h4>Búsqueda:</h4>
            <input type="text" placeholder="Ingrese el libro..." name="title"/>
            <h4>Cantidad de páginas:</h4>
            <div className="pages">
                <button className="btn-pages" onClick={props.handlePages}>{props.filters.pages ? "Desactivar" : "Activar" }</button>
                {
                    !props.filters.pages ||
                    <div>
                        <input type="range" min={props.amountPages.min} max={props.amountPages.max} step={1} name="pages" onChange={handlePages} value={amountPages}/>
                        <p>Entre {amountPages - 15} y {Number(amountPages) + 15} páginas</p>
                    </div>
                }
            </div>
            <h4>Género:</h4>
            <select name="generos">
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
            <button className="btn-clear">Limpiar</button>
        </section>
    )
}

export default Filters;