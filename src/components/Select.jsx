import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setFilter, setSearch } from "../store/filterSlice";
import { validate } from "../validation";
import "../styles/Select.scss";

function Select() {
  const [error, setError] = useState(null);

  const dispatch = useDispatch();

  const { filter, search } = useSelector((state) => state.filter);

  const changeFilter = (e) => {
    dispatch(setFilter(e.target.value));
  };

  const onSearchInput = async (e) => {
    dispatch(setSearch(e.target.value));
    setError(await validate(e.target.value));
  };

  return (
    <div className="filters">
      <input type="text" value={search} onInput={onSearchInput}></input>
      <select id="filters-dropdown" value={filter} onChange={changeFilter}>
        <option value="all">All</option>
        <option value="favourites">Favourites</option>
        <option value="ascending">A-Z</option>
        <option value="descending">Z-A</option>
      </select>
      <p className="error">{error}</p>
    </div>
  );
}

export default Select;
