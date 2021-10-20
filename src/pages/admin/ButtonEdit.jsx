// NPM packages
import { RiEdit2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

export default function ButtonEdit({to}) {
  return (
    <form>
      <Link to = {to} className="btn btn-main btn-32 edit" >
        <h4>
          <RiEdit2Fill /> Edit
        </h4>
      </Link>
    </form>
  );
}
