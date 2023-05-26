const pokemonReducer = (
  state = localStorage.getItem("pokemon")
    ? JSON.parse(localStorage.getItem("pokemon"))
    : [],
  action
) => {
  switch (action.type) {
    case "SET_POKEMON":
      return action.payload;
    default:
      return state;
  }
};

export default pokemonReducer;
