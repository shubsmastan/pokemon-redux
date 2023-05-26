import { useDispatch } from "react-redux";
import "../styles/Select.scss";

function Select({ selected, changeFilter }) {
  const dispatch = useDispatch();

  const handleChangeInput = (e) => {
    dispatch({ type: "SET_INPUT", payload: e.target.value });
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
