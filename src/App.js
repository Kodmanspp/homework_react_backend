import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import './index.scss';
import Books from './components/Books/Books';
import Navbar from './components/Navbar/Navbar';
import Book from './components/Book/Book';

function App() {
    return (

        <BrowserRouter>
            <Navbar />
            <div className="container">

                <Switch>
                    <Route path={`/books`} exact component={Books} />
                    <Route path={'/books/:id'} component={Book}/>
                </Switch>
            </div>
        </BrowserRouter>

    );
}

export default App;
