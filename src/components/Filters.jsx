import "./Filters.css";

const Filters = (props) => {
    return (
        <section className="section-filters">
            <h3>Filtros</h3>
            <h4>Búsqueda:</h4>
            <input type="text" placeholder="Ingrese el libro..." name="titulo"/>
            <h4>Cantidad de paginas:</h4>
            <div className="pages">
                <button>Activar</button>
                <input type="range" min={0} max={10} step={1} name="pages"/>
            </div>
            <h4>Genero:</h4>
            <select name="generos">
                {

                }
            </select>
            <button>Limpiar</button>
        </section>
    )
}

export default Filters;