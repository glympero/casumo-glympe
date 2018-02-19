const booksReducerDefaultState = [];

const booksReducer = (state = booksReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_BOOKS':
      return action.books
    case 'UPDATE_BOOKS':
    return [...state, ...action.books ];
    default:
      return state;
  }
};

export default booksReducer;