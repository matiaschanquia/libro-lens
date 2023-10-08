import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { getAllBooks } from "./services/book";
import { getNowDate } from "./utils/dayjs";
import { INITIAL_FILTERS } from "./constants";



const objGeneros = {};

function App() {

  const [books, setBooks] = useState([]);
  const [filters, setFilters] = useState(INITIAL_FILTERS);
  const [orderBy, setOrderBy] = useState(0); // 0: por abecedario, 1: fecha de publicacion
  const [generos, setGeneros] = useState([]);
  const [amountPages, setAmountPages] = useState({
    min: 15,
    max: 45
  });
  const [amountPagesCurrent, setAmountPagesCurrent] = useState(15);
  const [reading, setReading] = useState([])

  useEffect(() => {
    if(books.length && generos.length === 0) {
      const arrayGeneros = [];
      let min = books[0].book.pages;
      let max = books[0].book.pages;
      books.forEach(({book}) => {
        if(!objGeneros.hasOwnProperty(book.genre)) {
          objGeneros[book.genre] = book.genre;
          arrayGeneros.push(book.genre);
        }
        if(book.pages < min) min = book.pages;
        if(book.pages > max) max = book.pages;
      });
      setAmountPages({
        min: min,
        max: max
      });
      setAmountPagesCurrent(min);

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
      .catch(e => {
        console.error(e);
      });
    const readingListJSON = localStorage.getItem("readingList");
    if(localStorage.getItem("readingList")) {
      const readingList = JSON.parse(readingListJSON);
      setReading(readingList);
    }
  }, [])

  const handleOrderBy = (e) => {
    setOrderBy(e.target.value)
  }

  const handlePages = () => {
    setFilters({
      ...filters,
      pages: !filters.pages
    });
  }

  const addBookReading = (bookTitle) => {
    const bookToAdd = books.filter(({book}) => {
      return book.title === bookTitle;
    })[0];

    bookToAdd.book.date = getNowDate().format();

    const newReading = [...reading, bookToAdd];

    setReading([...newReading]);
    localStorage.setItem("readingList", JSON.stringify([...newReading]));
  }

  const handleTitle = (e) => {
    setFilters({
      ...filters,
      title: e.target.value,
    });
  }

  const handleAmountPagesCurrent = (pages) => {
    setAmountPagesCurrent(Number(pages));
  }
 
  return (
    <div className="container-app">
      <Header reading={reading} amountPagesCurrent={amountPagesCurrent}/>
      <Main books={books} generos={generos} amountPages={amountPages} filters={filters} orderBy={orderBy} 
            handleOrderBy={handleOrderBy} handlePages={handlePages} addBookReading={addBookReading} reading={reading}
            handleTitle={handleTitle} amountPagesCurrent={amountPagesCurrent} handleAmountPagesCurrent={handleAmountPagesCurrent} />
      <Footer />
    </div>
  )
}

export default App;