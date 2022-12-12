const books = [];

const removeBookFromState = (state, id) => {
  const filteredBooks = state.filter((book) => book.id !== id);
  return [...state, filteredBooks];
};

const CREATE = 'bookStore/books/CREATE';
const REMOVE = 'bookStore/books/REMOVE';

const booksReducer = (state = books, action) => {
  switch (action.type) {
    case CREATE:
      return [...state, action.payload];
    case REMOVE:
      return removeBookFromState(state, action.payload);
    default:
      return state;
  }
};

export const createBook = (book) => ({
  type: CREATE,
  payload: { ...book, id: Math.random().toString(36).replace('0.', '') },
});

export const removeBook = (book) => ({ type: REMOVE, payload: book });

export default booksReducer;
