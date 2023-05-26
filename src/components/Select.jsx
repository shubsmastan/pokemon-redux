import { useDispatch } from "react-redux";
import { setFilter, setSearch } from "../store/filterSlice";
import "../styles/Select.scss";

function Select({ selected }) {
  const dispatch = useDispatch();

  const changeFilter = (e) => {
    dispatch(setFilter(e.target.value));
  };

  const handleChangeInput = (e) => {
    dispatch(setSearch(e.target.value));
  };

  return (
    <div className="filters">
      <input type="text" onChange={handleChangeInput}></input>
      <select id="filters-dropdown" value={selected} onChange={changeFilter}>
        <option value="all">All</option>
        <option value="favourites">Favourites</option>
        <option value="ascending">A-Z</option>
        <option value="descending">Z-A</option>
      </select>
    </div>
  );
}

export default Select;
