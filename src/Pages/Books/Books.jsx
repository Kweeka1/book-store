import BookForm from '../../Components/BookForm/BookForm';
import BookItem from '../../Components/BookItem/BookItem';
import './books.scss';

const Books = () => {
  const authors = ['George RR Martin', 'Colleen Hoover', 'Louise Penny', 'Sarah J. Maas'];

  const handleFormSubmit = (ev) => {
    ev.preventDefault();
    ev.target.reset();
  };

  const books = [
    {
      id: Math.random().toString(36).replace('0.', ''),
      category: 'Epic fantasy',
      author: 'George RR Martin',
      title: 'A Song of Ice and Fire',
      percentage: 84,
    },
    {
      id: Math.random().toString(36).replace('0.', ''),
      category: 'Romance',
      author: 'Colleen Hoover',
      title: 'It Starts With Us',
      percentage: 69,
    },
    {
      id: Math.random().toString(36).replace('0.', ''),
      category: 'Mystery',
      author: 'Louise Penny',
      title: 'A World of Curiosities',
      percentage: 37,
    },
    {
      id: Math.random().toString(36).replace('0.', ''),
      category: 'Fantasy',
      author: 'Sarah J. Maas',
      title: 'A Court of Mist and Fury',
      percentage: 56,
    },
  ];

  return (
    <div className="book-wrapper">
      { books.map((book) => <BookItem key={book.id} bookDetails={book} />) }
      <BookForm categories={authors} handleFormSubmit={handleFormSubmit} />
    </div>
  );
};

export default Books;
