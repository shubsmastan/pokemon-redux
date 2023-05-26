import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "../styles/Footer.scss";

function Footer() {
  return (
    <>
      <footer>
        &copy; 2023&nbsp;
        <a href="https://www.github.com/shubsmastan">ShubsMastan</a>
        &nbsp;
        <a href="https://www.github.com/shubsmastan">
          <FontAwesomeIcon icon={faGithub} size="lg" />
        </a>
      </footer>
    </>
  );
}

export default Footer;
