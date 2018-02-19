import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const BookListItem = (props) => {
  return (
    <div className='list-item'>
      <div>
        <h3 className='list-item__title'>{props.book.name}</h3>
        <span className='list-item__subtitle'>
          {props.book.genre}, {moment(props.book.publish_date).format('Do MMMM YYYY')}
        </span>
      </div>
      <div className='list-item__author'>
        <h4 className='list-item__data'>{props.book.author.name},</h4>
        <span className='list-item__subtitle list-item__subtitle--data'>{props.book.author.gender}</span>
      </div>
    </div>
  );
};

BookListItem.propTypes = {
  book: PropTypes.object
};

export default BookListItem;