import './bookForm.scss';

// eslint-disable-next-line react/prop-types
const BookForm = ({ categories, handleFormSubmit }) => (
  <div className="book-form-section">
    <h1>Add a new Book</h1>
    <form onSubmit={handleFormSubmit} className="book-form">
      <input name="book-title" type="text" placeholder="Book title" />
      <select name="book-category" id="categories">
        {
          // eslint-disable-next-line react/prop-types
          categories.map((category) => (
            <option key={category} value={category}>{category}</option>
          ))
        }
      </select>
      <button type="submit">ADD BOOK</button>
    </form>
  </div>
);

export default BookForm;
