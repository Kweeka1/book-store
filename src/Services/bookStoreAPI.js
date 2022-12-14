const BASE_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps';
const API_KEY = 'oAIMlz1r6RllxGrBJ2bi';

export const removeBookAsync = async (id) => {
  await fetch(`${BASE_URL}/${API_KEY}/books/${id}`, {
    method: 'DELETE',
  });
};

export const getBooksAsync = async () => {
  const response = await fetch(`${BASE_URL}/${API_KEY}/books`);
  return response.json();
};

export const createBookAsync = async (book) => {
  await fetch(`${BASE_URL}/${API_KEY}/books`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(book),
  });
};
