import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import BookCard from "../../BookCard/BookCard";

export default function Books() {
    const [books, setBooks] = useState([]);

    const fetchData = async () => {
        let response = await fetch("http://localhost:1717/books");
        response = await response.json();
        setBooks(response);
    }

    useEffect(() => {
        fetchData();
    }, [])


    // eslint-disable-next-line react-hooks/exhaustive-deps
    async function deleteBook(id) {
        let response = await fetch(`http://localhost:1717/books/delete/${id}`, {
            method: "DELETE",
        })
        response = await response.json();
        if (response.id) {
            fetchData();
        }
    }

    async function isFavoriteBook(id, isFavorite) {
        isFavorite = !isFavorite; 
        let response = await fetch(`http://localhost:1717/books/update/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({"isFavorite": isFavorite})
            
        })
        console.log(isFavorite); 
        response = await response.json();
        if (response.id) {
            fetchData();
        }
    }


    return (
        <>
            <h2>Books</h2>
            <div className="row">
                {books && books.map(book =>
                    <BookCard
                        key={book.id}
                        id={book.id}
                        name={book.name}
                        author={book.author}
                        isFavorite={book.isFavorite}
                        deleteprops={deleteBook}
                        isFavoriteBook={isFavoriteBook}
                    />
                )}
            </div>
        </>
    )
}