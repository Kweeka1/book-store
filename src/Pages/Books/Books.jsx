import { useSelector, useDispatch } from 'react-redux';
import BookForm from '../../Components/BookForm/BookForm';
import BookItem from '../../Components/BookItem/BookItem';
import { createBook, removeBook } from '../../redux/books/books';
import './books.scss';

const Books = () => {
  const authors = ['George RR Martin', 'Colleen Hoover', 'Louise Penny', 'Sarah J. Maas'];
  const categories = ['Epic fantasy', 'Romance', 'Mystery', 'Fantasy'];

  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const getRandomCategory = (categories, start = 0) => {
    const index = Math.floor(Math.random() * (categories.length - start) + start);
    return categories[index];
  };

  const handleFormSubmit = (ev, book) => {
    ev.preventDefault();

    dispatch(createBook({
      ...book,
      percentage: Math.floor(Math.random() * 100),
      id: Math.random().toString(36).substring(2),
      category: getRandomCategory(categories),
    }));

    ev.target.reset();
  };

  const handleDeleteBook = (id) => {
    dispatch(removeBook(id));
  };

  return (
    <div className="book-wrapper">
      { books.map((book) => (
        <BookItem
          key={book.id}
          bookDetails={book}
          handleDeleteBook={() => handleDeleteBook(book.id)}
        />
      ))}
      <BookForm authors={authors} handleFormSubmit={handleFormSubmit} />
    </div>
  );
};

export default Books;
