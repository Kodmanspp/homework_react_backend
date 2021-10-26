import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Book(props) {

    const [book, setBook] = useState({});

    const id = props.match.params.id;

    async function getDetailBook() {
        let response = await fetch(`http://localhost:1717/books/detail/${id}`)
        response = await response.json();
        setBook(response);
    }
    useEffect(() => getDetailBook(),[])
    return (
        <div className="card-body"  >
            <h4 className="card-title">{book.name}</h4>
            <h5 className="card-subtitle mb-2 text-muted">Автор: {book.author}</h5>
            <h6 className="card-subtitle mb-2 text-muted">Год выпуска: {book.publishYear}</h6>
            <p> Жанры:    
                {
                    book.genres?.map((item, index) => <span key={index}> {item}, </span>)
                }
            </p>
            <h6 className="card-subtitle mb-2 text-muted">Оригинальный язык: {book.originalLanguage}</h6>
            <button onClick={()=>props.history.goBack()} className="btn btn-danger">Return</button>
        </div>
    )
}