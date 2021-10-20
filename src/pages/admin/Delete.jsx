// NPM Packages
import { RiDeleteBinLine } from "react-icons/ri";

// Project files
import { deleteDocument } from "../../scripts/firebase/fireStore";
export default function Delete({ dataSelected, path }) {
  function handleDelete() {
    if (window.confirm("Are you sure ?")) {
      deleteDocument(path, dataSelected.id);
      alert("Successfully deleted");
    }
  }

  return (
    <form>
      <button
        className="btn btn-main btn-32 delete"
        disabled={dataSelected === ""}
        onClick={handleDelete}
      >
        <h4>
          <RiDeleteBinLine /> Delete
        </h4>
      </button>
    </form>
  );
}
