// NPM packages
import { useHistory } from "react-router-dom";

// Project files
import arrowBack from "../assets/images/arrow-left-circle.svg";

export default function ButtonBack({ label }) {
  const history = useHistory();

  return (
    <button
      className="btn btn-main btn-300 back"
      onClick={() => history.goBack()}
    >
      <h4>{label} </h4>
      <img className="icon-btn" src={arrowBack} alt="back" />
    </button>
  );
}
