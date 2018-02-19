// SET_BOOK_GENRE_FILTER
const setBookGenreFilter = (book_genre = '') => ({
  type: 'SET_BOOK_GENRE_FILTER',
  book_genre
});

// SET_AUTHOR_GENDER_FILTER
const setAuthorGenderFilter = (author_gender = '') => ({
  type: 'SET_AUTHOR_GENDER_FILTER',
  author_gender
});

// SORT_BY_BOOK_NAME
const sortByBookName = () => ({
  type: 'SORT_BY_BOOK_NAME'
});

// SORT_BY_AUTHOR_NAME
const sortByAuthorName = () => ({
  type: 'SORT_BY_AUTHOR_NAME'
});

// SET_SEARCH_DATE
const setSearchDate = (searchDate = undefined) => ({
  type: 'SET_SEARCH_DATE',
  searchDate
});


export { setBookGenreFilter, setAuthorGenderFilter, sortByBookName, sortByAuthorName, setSearchDate};