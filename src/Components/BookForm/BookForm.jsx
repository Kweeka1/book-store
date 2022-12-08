import { useRef } from 'react';
import './bookForm.scss';

// eslint-disable-next-line react/prop-types
const BookForm = ({ categories, handleFormSubmit }) => {
  const form = useRef(null);

  return (
    <div className="book-form-section">
      <h1>Add a new Book</h1>
      <form ref={form} className="book-form">
        <input name="book-title" type="text" placeholder="Book title" />
        <select name="book-category" id="categories">
          {
            // eslint-disable-next-line react/prop-types
            categories.map((category) => (
              <option key={category} value={category}>{category}</option>
            ))
          }
        </select>
        <button onClick={(ev) => handleFormSubmit(ev, form.current)} type="submit">ADD BOOK</button>
      </form>
    </div>
  );
};

export default BookForm;
