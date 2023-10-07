export const getAllBooks = () => {
    return fetch("/src/books.json")
        .then(res => res.json())
        .then(data => {
            return data.library;
        })
}