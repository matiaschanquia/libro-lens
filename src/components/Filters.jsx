import { useState } from "react";
import "./Filters.css";

const Filters = (props) => {
    const [amountPages, setAmountPages] = useState(0);

    const handlePages = e => {
        setAmountPages(e.target.value);
    }

    return (
        <section className="section-filters">
            <h3>Filtros</h3>
            <h4>Búsqueda:</h4>
            <input type="text" placeholder="Ingrese el libro..." name="title"/>
            <h4>Cantidad de paginas:</h4>
            <div className="pages">
                <button className="btn-pages">Activar</button>
                <input type="range" min={0} max={10} step={1} name="pages" onChange={handlePages} value={amountPages}/>
                <p>{amountPages}</p>
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
            <button className="btn-clear">Limpiar</button>
        </section>
    )
}

export default Filters;