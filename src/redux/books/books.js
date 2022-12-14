import { createAsyncThunk } from '@reduxjs/toolkit';
import { removeBookAsync, createBookAsync, getBooksAsync } from '../../Services/bookStoreAPI';

const books = [];

const CREATE = 'bookStore/books/CREATE';
const REMOVE = 'bookStore/books/REMOVE';
const LOAD = 'bookStore/books/LOAD';

const START_CREATE_REQUEST = 'bookStore/books/START_CREATE_REQUEST';
const START_REMOVE_REQUEST = 'bookStore/books/START_REMOVE_REQUEST';
const START_LOAD_REQUEST = 'bookStore/books/START_LOAD_REQUEST';

const createBook = (books, id) => ({
  type: CREATE,
  payload: { ...books[id][0], id },
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
  const books = await getBooksAsync();
  return thunk.dispatch(loadBooks(books));
});

export const removeBookRequest = createAsyncThunk(START_REMOVE_REQUEST, async (id, thunk) => {
  await removeBookAsync(id);
  const books = await getBooksAsync();
  return thunk.dispatch(removeBook(books, id));
});

export const addBookRequest = createAsyncThunk(START_CREATE_REQUEST, async (book, thunk) => {
  await createBookAsync(book);
  const books = await getBooksAsync();
  return thunk.dispatch(createBook(books, book.item_id));
});

const booksReducer = (state = books, action) => {
  switch (action.type) {
    case CREATE:
      return [...state, {
        ...action.payload,
        percentage: Math.floor(Math.random() * 100),
      }];
    case REMOVE:
    case LOAD:
      return [...action.payload];
    default:
      return state;
  }
};

export default booksReducer;
