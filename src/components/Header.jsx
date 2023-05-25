import logo from "../assets/pokemon-logo.svg";
import "../styles/Header.scss";

function Header() {
  return (
    <>
      <header>
        <img src={logo} width="200px" />
        <h1 className="app-logo">
          A React Redux App by{" "}
          <a href="https://www.github.com/shubsmastan">ShubsMastan</a>
        </h1>
      </header>
    </>
  );
}

export default Header;
