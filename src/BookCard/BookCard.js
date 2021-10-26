import { Link } from "react-router-dom";

export default function BookCard(props) {
    return (
        <div className="col-sm-6">
            <div className="card">
                <div className="card-body">

                    <h5 className="card-title"><Link to={`/books/${props.id}`}>{props.name}</Link></h5>
                    <h6 className="card-subtitle mb-2 text-muted">{props.author}</h6>
                    <p className="card-text"></p>

                    <button type="button" className="btn btn-danger" onClick={() => props.deleteprops(props.id)}>Delete</button>
                    <button className="btn btn-outline-secondary" onClick={()=> props.isFavoriteBook(props.id, props.isFavorite)}>
                        <i className={`bi ${props.isFavorite ? "bi-heart-fill" : "bi-heart"}`}></i>
                    </button>
                </div>
            </div>
        </div>
    )
}