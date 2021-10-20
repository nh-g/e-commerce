import { useCallback, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

import { getDocument, updateDocument } from "../../scripts/firebase/fireStore";
import ProductEditor from "./FormProductEditor";

export default function EditProduct() {
  const history = useHistory();

  console.log("history", history)
  const [product, setProduct] = useState();
  const [status, setStatus] = useState(0); // 0: loading, 1: loaded, 2: error
  const { productID } = useParams();
  const path = "products";
  const fetchData = useCallback(
    async (path) => {
      try {
        const productItem = await getDocument(path, productID);
        console.log("Edit Product Page", productItem);

        setProduct(productItem);
        setStatus(1);
      } catch {
        setStatus(2);
      }
    },
    [productID]
  );

  useEffect(() => {
    fetchData(path);
  }, [fetchData, path]);


  async function onUpdateProduct(productItem) {
    await updateDocument(path, productItem.id, productItem);
    alert("Product has been updated");
    history.goBack();
  }

  console.log("Edit Product Page", product);
  return (
    <div className="admin-container">
      <h1>Update Product</h1>
      {status === 0 && <p>Loading</p>}
      {status === 1 && (
        <>
          <ProductEditor onUpdateProduct={onUpdateProduct} item={product} />
          <button className="button-secondary" onClick={() => history.goBack()}>
            Go back
          </button>
        </>
      )}
      {status === 2 && <p>Error</p>}
    </div>
  );
}
