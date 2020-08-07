const initialState = {
  books: [],
  loading: true,
  totalOrdered: 0,
  cartItems: [],
};

const updateCart = (state, action, amount) => {
  const bookId = action.payload;
  const book = state.books.find((item) => item.id === bookId);
  const bookInCart = state.cartItems.find((item) => item.id === bookId);

  if (bookInCart) {
    const cartItems = state.cartItems.map((item) => {
      if (item.id === bookId) {
        item.count += amount;
        item.total += book.price * amount;
        state.totalOrdered += book.price * item.count;
      }
      return item;
    });
    if (bookInCart.count === 0) {
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== bookId),
      };
    }
    return {
      ...state,
      cartItems,
    };
  } else {
    const newItem = {
      id: book.id,
      name: book.title,
      total: book.price,
      count: 1,
    };
    return {
      ...state,
      cartItems: state.cartItems.concat(newItem),
    };
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "BOOKS_LOADED":
      return {
        ...state,
        books: action.payload,
        loading: false,
      };

    case "BOOKS_LOADING":
      return {
        ...state,
        loading: true,
      };
    case "BOOKS_DELETE_IN_CART":
      return {
        ...state,
      };
    case "BOOKS_REMOVED_IN_CART":
      return updateCart(state, action, -1);

    case "BOOKS_ADDED_IN_CART":
      return updateCart(state, action, 1);
    default:
      return state;
  }
};

export default reducer;
