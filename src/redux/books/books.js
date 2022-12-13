const books = [
  {
    id: Math.random().toString(36).substring(2),
    category: 'Epic fantasy',
    author: 'George RR Martin',
    title: 'A Song of Ice and Fire',
    percentage: Math.floor(Math.random() * 100),
  },
  {
    id: Math.random().toString(36).substring(2),
    category: 'Romance',
    author: 'Colleen Hoover',
    title: 'It Starts With Us',
    percentage: Math.floor(Math.random() * 100),
  },
  {
    id: Math.random().toString(36).substring(2),
    category: 'Mystery',
    author: 'Louise Penny',
    title: 'A World of Curiosities',
    percentage: Math.floor(Math.random() * 100),
  },
  {
    id: Math.random().toString(36).substring(2),
    category: 'Fantasy',
    author: 'Sarah J. Maas',
    title: 'A Court of Mist and Fury',
    percentage: Math.floor(Math.random() * 100),
  },
];

const removeBookFromState = (state, id) => {
  const bookToBeRemoved = state.find((book) => book.id === id);
  if (!bookToBeRemoved) return state;
  return state.filter((book) => book !== bookToBeRemoved);
};

const CREATE = 'bookStore/books/CREATE';
const REMOVE = 'bookStore/books/REMOVE';

const booksReducer = (state = books, action) => {
  switch (action.type) {
    case CREATE:
      return [...state, action.payload];
    case REMOVE:
      return [...removeBookFromState(state, action.payload)];
    default:
      return state;
  }
};

export const createBook = (book) => ({
  type: CREATE,
  payload: { ...book, id: Math.random().toString(36).substring(2) },
});

export const removeBook = (book) => ({ type: REMOVE, payload: book });

export default booksReducer;
