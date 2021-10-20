// NPM Packages
import { useCallback, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

// Project files
import { getDocument, updateDocument } from "../../scripts/firebase/fireStore";

export default function EditProduct({ FormEditor }) {
  const history = useHistory();

  console.log("history", history);
  const [item, setItem] = useState();
  const [status, setStatus] = useState(0); // 0: loading, 1: loaded, 2: error
  const { productID: itemID } = useParams();
  const path = "products";
  const fetchData = useCallback(async (path) => {
      try {
        const selectedItem = await getDocument(path, itemID);
        setItem(selectedItem);
        setStatus(1);
      } catch {
        setStatus(2);
      }
    },[itemID]
  );

  useEffect(() => {fetchData(path);}, [fetchData, path]);

  async function onUpdate(selectedItem) {
    await updateDocument(path, selectedItem.id, selectedItem);
    alert(`${item.title} has been updated`);
    history.goBack();
  }

  return (
    <div className="admin-container">
      <h1>Update Product</h1>
      {status === 0 && <p>Loading</p>}
      {status === 1 && (
        <>
          <FormEditor onUpdate={onUpdate} item={item} />
          <button
            className="btn btn-main btn-300"
            onClick={() => history.goBack()}
          >
            Cancel
          </button>
        </>
      )}
      {status === 2 && <p>Error</p>}
    </div>
  );
}
