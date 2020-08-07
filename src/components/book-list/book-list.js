import React, { Component } from "react";
import BookListItem from "../book-list-item";
import { connect } from "react-redux";

import { withBookstoreService } from "../hoc";
import { booksLoaded, booksLoading, bookAddedInCart } from "../../actions";
import { compose } from "../../utils";

import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

import "./book-list.css";

const BookList = ({ books, bookAddedInCart }) => {
  return (
    <ul className="book-list">
      {books.map((book) => {
        return (
          <li key={book.id}>
            <BookListItem book={book} bookAddedInCart={bookAddedInCart} />
          </li>
        );
      })}
    </ul>
  );
};

class BookListContainer extends Component {
  componentDidMount() {
    const {
      bookstoreService,
      booksLoaded,
      booksError,
      booksLoading,
    } = this.props;

    booksLoading();

    bookstoreService
      .getBooks()
      .then((data) => booksLoaded(data))
      .catch((err) => booksError(err));
  }

  render() {
    const { books, loading, error, bookAddedInCart } = this.props;

    if (loading) {
      return <Spinner />;
    }

    if (error) {
      return <ErrorIndicator />;
    }

    return <BookList books={books} bookAddedInCart={bookAddedInCart} />;
  }
}

const mapStateToProps = ({ book: { books, loading } }) => {
  return { books, loading };
};

const mapDispatchToProps = {
  booksLoaded,
  booksLoading,
  bookAddedInCart,
};

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);

/* export default withBookstoreService(
  connect(mapStateToProps, mapDispatchToProps), BookList
) */
