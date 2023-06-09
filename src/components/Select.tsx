import { useSelector, useDispatch } from "react-redux";
import { setFilter, setSearch, setError } from "../store/filterSlice";
import { RootState } from "../store";
import { validate } from "../validation";
import "../styles/Select.scss";

function Select() {
  const dispatch = useDispatch();

  const { filter, search, error } = useSelector(
    (state: RootState) => state.filter
  );

  const changeFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setFilter(e.target.value));
  };

  const onSearchInput = async (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearch(e.target.value));
    dispatch(setError(await validate(e.target.value)));
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
