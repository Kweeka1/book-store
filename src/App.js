import './App.scss';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Books from './Pages/Books/Books';
import Header from './Components/Header/Header';
import Categories from './Pages/Categories/Categories';

const App = () => (
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

export default App;
