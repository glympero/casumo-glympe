import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setBookGenreFilter, setAuthorGenderFilter, sortByBookName, sortByAuthorName, setSearchDate } from '../actions/filters';
import { SingleDatePicker } from 'react-dates';

class BookListFilters extends React.Component {

  state = {
    calendarFocused: false
  }

  onFocusChange = ( { focused }) => {
    this.setState(() => ({
      calendarFocused: focused
    }));
  }

  onDateChange = (searchDate) => {
    if(searchDate) {
      this.props.dispatch(setSearchDate(searchDate));
    }
  }

  onDateClear = () => {
    this.props.dispatch(setSearchDate(undefined));
  }

    render() {
      return (
        <div className='content-container'>
          <div className='input-group'>
            <div className='input-group__item'> 
              <input 
                type='text'
                className='text-input'
                placeholder='Search Book Genre'
                value={this.props.filters.book_genre} 
                onChange={(event) => {
                  this.props.dispatch(setBookGenreFilter(event.target.value));
                }} />
              </div>
              
              <div className='input-group__item'> 
                <select 
                  value={this.props.filters.author_gender}
                  className='select'
                  onChange={(e) => {
                    const filter = e.target.value;
                    this.props.dispatch(setAuthorGenderFilter(filter));
                  }}>
                    <option value=''>All</option>
                    <option value='Male'>Male</option>
                    <option value='Female'>Female</option>
                </select>
              </div>
              <div className='input-group__item'> 
                <select 
                  value={this.props.filters.sortBy}
                  className='select'
                  onChange={(e) => {
                    const filter = e.target.value;
                    if(filter === 'name') {
                        this.props.dispatch(sortByBookName());
                    }else if(filter === 'author') {
                        this.props.dispatch(sortByAuthorName());
                    }
                }}>
                  <option value='name'>Book Name</option>
                  <option value='author'>Author Name</option>
              </select>
              </div>
              <div className='input-group__item'> 
                <SingleDatePicker
                    date={this.props.filters.searchDate} 
                    onDateChange={this.onDateChange} 
                    focused={this.state.calendarFocused} 
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1} //Show only one month
                    isOutsideRange={(day) => false} //Select days before current day
                />
              </div>
              <div className='input-group__item'> 
                <button className='button' onClick={this.onDateClear}>Clear</button>
              </div>
            </div>
          </div>
      )
  }   
}

BookListFilters.propTypes = {
  filters: PropTypes.object,
  dispatch: PropTypes.func
};

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  };
};

export default connect(mapStateToProps)(BookListFilters);

 