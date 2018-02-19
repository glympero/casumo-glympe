//SET_BOOKS
const setBooks = (books) => ({
  type: 'SET_BOOKS',
  books
});

const updateBooks = (books) => ({
  type: 'UPDATE_BOOKS',
  books
});

export { setBooks, updateBooks };