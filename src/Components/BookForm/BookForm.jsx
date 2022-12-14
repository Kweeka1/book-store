import { useState } from 'react';
import './bookForm.scss';

// eslint-disable-next-line react/prop-types
const BookForm = ({ authors, handleFormSubmit }) => {
  const [book, setBook] = useState({
    title: '',
    category: '',
    author: authors[0],
  });

  return (
    <div className="book-form-section">
      <h1>Add a new Book</h1>
      <form
        onReset={() => setBook({ title: '', category: '', author: authors[0] })}
        onSubmit={(ev) => handleFormSubmit(ev, book)}
        className="book-form"
      >
        <input
          onInput={(ev) => setBook((prev) => ({ ...prev, title: ev.target.value }))}
          name="book-title"
          type="text"
          placeholder="Book title"
        />
        <input
          onInput={(ev) => setBook((prev) => ({ ...prev, category: ev.target.value }))}
          name="book-category"
          type="text"
          placeholder="Book category"
        />
        <select
          onChange={(ev) => setBook((prev) => ({ ...prev, author: ev.target.value }))}
          name="book-auhor"
          id="authors"
        >
          {
            // eslint-disable-next-line react/prop-types
            authors.map((auhor) => (
              <option key={auhor} value={auhor}>{auhor}</option>
            ))
          }
        </select>
        <button type="submit">ADD BOOK</button>
      </form>
    </div>
  );
};

export default BookForm;
