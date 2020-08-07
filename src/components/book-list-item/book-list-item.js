import React from "react";
import "./book-list-item.css";

const BookListItem = ({ book, bookAddedInCart }) => {
  const { title, author, price, coverImage, id } = book;
  return (
    <div className="book-list-item">
      <div className="book-cover">
        <img src={coverImage} alt="cover" />
      </div>
      <div className="book-details">
        <span className="book-title">{title}</span>
        <div className="book-author">{author}</div>
        <div className="book-price">${price}</div>
        <button
          className="btn btn-info add-to-cart"
          onClick={() => bookAddedInCart(id)}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default BookListItem;
