import moment from 'moment';

//Filters Reducer
const filtersReducerDefaultState = {
  book_genre: '',
  author_gender: '',
  sortBy: 'name',
  setSearchDate: undefined,
}

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_BOOK_GENRE_FILTER':
      return {
        ...state,
        book_genre: action.book_genre
      };
    case 'SET_AUTHOR_GENDER_FILTER':
      return {
        ...state,
        author_gender: action.author_gender
      };
    case 'SORT_BY_BOOK_NAME':
      return {
        ...state,
        sortBy: 'name'
      };
    case 'SORT_BY_AUTHOR_NAME':
      return {
        ...state,
        sortBy: 'author'
      };
    case 'SET_SEARCH_DATE':
      return {
        ...state,
        searchDate: action.searchDate
      }
    default:
      return state;
  }
};

export default filtersReducer;