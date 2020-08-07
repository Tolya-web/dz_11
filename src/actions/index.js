const booksLoaded = (newBooks) => {
  return function(dispatch) {
    setTimeout(() => {
      dispatch({
        type: "BOOKS_LOADED",
        payload: newBooks,
      });
    }, 1000);
  };
};

const booksLoading = () => {
  return {
    type: "BOOKS_LOADING",
  };
};

const bookRemovedInCart = (id) => {
  return {
    type: "BOOKS_REMOVED_IN_CART",
    payload: id,
  };
};

const bookAddedInCart = (id) => {
  return {
    type: "BOOKS_ADDED_IN_CART",
    payload: id,
  };
};

const bookDeleteInCart = (id) => {
  return {
    type: "BOOKS_DELETE_IN_CART",
    payload: id,
  };
};

export {
  booksLoaded,
  booksLoading,
  bookAddedInCart,
  bookRemovedInCart,
  bookDeleteInCart,
};
