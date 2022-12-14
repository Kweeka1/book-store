import { useSelector, useDispatch } from 'react-redux';
import BookForm from '../../Components/BookForm/BookForm';
import BookItem from '../../Components/BookItem/BookItem';
import { addBookRequest, removeBookRequest } from '../../redux/books/books';
import './books.scss';

const Books = () => {
  const authors = ['George RR Martin', 'Colleen Hoover', 'Louise Penny', 'Sarah J. Maas'];

  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const handleFormSubmit = (ev, book) => {
    ev.preventDefault();

    dispatch(addBookRequest({
      item_id: Math.random().toString(36).substring(2),
      ...book,
    }));

    ev.target.reset();
  };

  const handleDeleteBook = (id) => {
    dispatch(removeBookRequest(id));
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
