// NPM packages
import { RiEdit2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

export default function ButtonEdit({to}) {
  let history = useHistory();

  function handleClick() {
    history.push(to);
  }

  return (
    <button className="btn btn-main btn-32 edit" onClick={handleClick}>
      <h4>
        <RiEdit2Fill /> Edit
      </h4>
    </button>
  );
}
