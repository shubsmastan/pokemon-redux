import logo from "../assets/pokemon-logo.svg";
import "../styles/Header.scss";

function Header() {
  return (
    <>
      <header>
        <img src={logo} />
        <h1 className="app-logo">A React + Redux App</h1>
      </header>
    </>
  );
}

export default Header;
