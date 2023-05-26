const favouritesReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_FAVOURITES":
      return action.payload;
    default:
      return state;
  }
};

export default favouritesReducer;
