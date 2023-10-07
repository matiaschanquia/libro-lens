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

function App() {

  const [books, setBooks] = useState([]);
  const [filters, setFitlters] = useState(INITIAL_FILTERS);
  const [orderBy, setOrderBy] = useState(0); // 0: por abecedario, 1: fecha de publicacion
 
  useEffect(() => {
    getAllBooks()
      .then(data => {
        setBooks(data);
      })
  }, [])
  return (
    <div className="container-app">
      <Header />
      <Main books={books}/>
      <Footer />
    </div>
  )
}

export default App
