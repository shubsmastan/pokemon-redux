import "../styles/Select.scss";

function Select({ selected, changeFilter }) {
  return (
    <div className="filters">
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
