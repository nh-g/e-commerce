// NPM Packages
import { RiDeleteBinLine } from "react-icons/ri";

// Project files
import { deleteElement } from "../../hooks/useCRUD";

export default function Delete({ dataSelected }) {

    function handleDelete() {
    if (window.confirm("Are you sure ?")) {
        deleteElement("categories", dataSelected.id);
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
          <RiDeleteBinLine
          /> Delete
        </h4>
      </button>
    </form>
  );
}
