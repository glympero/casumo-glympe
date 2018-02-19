import React from 'react';
import PropTypes from 'prop-types';
import ReactList from 'react-list';
import { connect } from 'react-redux';
import { setBooks } from '../actions/books';
import BookListItem from './BookListItem';
import selectBooks from '../selectors/books';
import books from '../fixtures/books';

class BookList extends React.Component {

  componentWillMount = () => {
    this.populateBooks(books);
  }

  populateBooks = (books) => {
    this.props.dispatch(setBooks(books));
  }

  renderItem = (index, key) => {
    return <BookListItem key={this.props.books[index].id}  book={this.props.books[index]} />;
  }

  render() {
    return (
      <div className='content-container'>
      <div className='list-header'>
        <div className='show-for-mobile'>Books</div>
        <div className='show-for-desktop'>Book</div>
        <div className='show-for-desktop'>Author</div>
      </div>
        <div className='list-body'>
          <div className='row h100-scroll'>
            <ReactList
              itemRenderer={this.renderItem}
              length={this.props.books.length}
              type='variable'
            />
          </div>
          {
            this.props.books.length === 0 && <span className='list-item list-item--message'>No Books Found</span>
          }
          </div>
      </div>        
    );
  }
};

BookList.propTypes = {
  books: PropTypes.array,
  dispatch: PropTypes.func
};

const mapStateToProps = (state) => {
  return {
    books: selectBooks(state.books, state.filters)
  }
};

export default connect(mapStateToProps)(BookList);
