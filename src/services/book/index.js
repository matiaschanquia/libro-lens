export const getAllBooks = () => {
    return fetch("/books.json")
        .then(res => res.json())
        .then(data => {
            return data.library;
        })
}