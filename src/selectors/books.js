import moment from 'moment';

const getVisibleBooks = (books, filters) => {
  const {book_genre, author_gender, sortBy, searchDate } = filters;
  return books.filter(book => {

    const publishedAtMoment = moment(book.publish_date);
    const searchDateMatch =  searchDate !== undefined ? searchDate.isSame(publishedAtMoment, 'date') : true;
    const bookGenreMatched = typeof book_genre === 'string' && book.genre.toLowerCase().indexOf(book_genre.toLowerCase()) !== -1;
    const authorGenderMatched = author_gender !== '' ? typeof author_gender === 'string' && book.author.gender.toLowerCase() === author_gender.toLowerCase() : true;
      
    return bookGenreMatched && authorGenderMatched && searchDateMatch;
  }).sort((a, b) => {
    if(sortBy === 'name') {
      return a.name > b.name ? 1 : -1;
    }
    if(sortBy === 'author') {
      return a.author.name > b.author.name ? 1 : -1;
    }
  });
};

export default getVisibleBooks;