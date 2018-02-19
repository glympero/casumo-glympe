import React from 'react';
import BookList from './BookList';
import BookListFilters from './BookListFilters';

const BooksDashboardPage = (props) => {
    return (
      <div>
      <BookListFilters />
      <BookList />
    </div>
    );
  };

export default BooksDashboardPage;