import {  NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="navbar-brand">
                Books API
            </div>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink to="/books" exact className="nav-link active">Books</NavLink>
                </li>
            </ul>
        </nav>
    )
}