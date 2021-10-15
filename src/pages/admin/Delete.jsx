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
        className="btn btn-main"
        disabled={dataSelected === ""}
        onClick={handleDelete}
      >
        <h4>Delete</h4>
      </button>
    </form>
  );
}
