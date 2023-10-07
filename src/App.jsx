import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { getAllBooks } from "./services/book";

const INITIAL_FILTERS = {
    title: "",
    pages: 0,
    genre: "",
}

const objGeneros = new Object();

function App() {

  const [books, setBooks] = useState([]);
  const [filters, setFilters] = useState(INITIAL_FILTERS);
  const [orderBy, setOrderBy] = useState(0); // 0: por abecedario, 1: fecha de publicacion
  const [generos, setGeneros] = useState([]);

  useEffect(() => {
    if(books.length && generos.length === 0) {
      const arrayGeneros = [];
      let min = 0;
      let max = 0;
      books.forEach(({book}) => {
        if(!objGeneros.hasOwnProperty(book.genre)) {
          objGeneros[book.genre] = book.genre;
          arrayGeneros.push(book.genre);
        }
      });

      const arrayGenerosOrdenado = arrayGeneros.sort()

      setGeneros([...arrayGenerosOrdenado])
    }

    if(books.length) {
      
    }
  }, [books])

  useEffect(() => {
    getAllBooks()
      .then(data => {
        setBooks(data);
      })
  }, [])
  return (
    <div className="container-app">
      <Header />
      <Main books={books} generos={generos}/>
      <Footer />
    </div>
  )
}

export default App
