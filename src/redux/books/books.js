import { createAsyncThunk } from '@reduxjs/toolkit';
import { removeBookAsync, createBookAsync, getBooksAsync } from '../../Services/bookStoreAPI';

const books = {
  books_pending: 0,
  status: '',
  books: [],
};

const CREATE = 'bookStore/books/CREATE';
const REMOVE = 'bookStore/books/REMOVE';
const LOAD = 'bookStore/books/LOAD';

const STATUS_PENDING = 'bookStore/books/PENDING';
const STATUS_SUCCESS = 'bookStore/books/SUCCESS';

const START_CREATE_REQUEST = 'bookStore/books/START_CREATE_REQUEST';
const START_REMOVE_REQUEST = 'bookStore/books/START_REMOVE_REQUEST';
const START_LOAD_REQUEST = 'bookStore/books/START_LOAD_REQUEST';

const setStatusPending = (bookCount = 0) => ({ type: STATUS_PENDING, payload: bookCount });
const setStatusSuccess = () => ({ type: STATUS_SUCCESS });

const createBook = (books, id) => ({
  type: CREATE,
  payload: {
    id,
    ...books[id][0],
    percentage: Math.floor(Math.random() * 100),
  },
});

const loadBooks = (books) => ({
  type: LOAD,
  payload: Object.entries(books).map(([id, item]) => ({
    id,
    ...item[0],
    percentage: Math.floor(Math.random() * 100),
  })),
});

const removeBook = (books, id) => {
  const collection = books;
  delete collection[id];

  return {
    type: REMOVE,
    payload: Object.entries(collection).map(([id, item]) => ({
      id,
      ...item[0],
      percentage: Math.floor(Math.random() * 100),
    })),
  };
};

export const loadBooksRequest = createAsyncThunk(START_LOAD_REQUEST, async (_, thunk) => {
  thunk.dispatch(setStatusPending());
  const books = await getBooksAsync();
  thunk.dispatch(loadBooks(books));
  thunk.dispatch(setStatusSuccess());
});

export const removeBookRequest = createAsyncThunk(START_REMOVE_REQUEST, async (id, thunk) => {
  await removeBookAsync(id);
  const books = await getBooksAsync();
  return thunk.dispatch(removeBook(books, id));
});

export const addBookRequest = createAsyncThunk(START_CREATE_REQUEST, async (book, thunk) => {
  thunk.dispatch(setStatusPending(1));
  await createBookAsync(book);
  const books = await getBooksAsync();
  thunk.dispatch(createBook(books, book.item_id));
  thunk.dispatch(setStatusSuccess());
});

const booksReducer = (state = books, action) => {
  switch (action.type) {
    case STATUS_PENDING:
      return {
        ...state,
        status: 'pending',
        books_pending: action.payload ? action.payload : 0,
      };
    case STATUS_SUCCESS:
      return {
        ...state,
        status: 'success',
        books_pending: 0,
      };
    case CREATE:
      return { ...state, books: [...state.books, action.payload] };
    case REMOVE:
    case LOAD:
      return { ...state, books: [...action.payload] };
    default:
      return state;
  }
};

export default booksReducer;
