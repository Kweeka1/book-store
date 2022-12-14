import './App.scss';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Books from './Pages/Books/Books';
import Header from './Components/Header/Header';
import Categories from './Pages/Categories/Categories';
import { loadBooksRequest } from './redux/books/books';

const App = () => {
  const dispatch = useDispatch();

  dispatch(loadBooksRequest());

  return (
    <BrowserRouter>
      <Header />
      <div className="app">
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
