import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

function Loading({ deleted }) {
  return deleted ? (
    <div style={{ fontSize: "2rem", textAlign: "center", padding: "40px 0" }}>
      All Pokemon deleted! Refresh the page for more.
    </div>
  ) : (
    <div style={{ fontSize: "2rem", textAlign: "center", padding: "40px 0" }}>
      <FontAwesomeIcon
        icon={faSpinner}
        style={{ marginRight: "10px" }}
        size="lg"
        spin
      />
    </div>
  );
}

export default Loading;
