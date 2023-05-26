const pokemonReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_POKEMON":
      return action.payload;
    default:
      return state;
  }
};

export default pokemonReducer;
