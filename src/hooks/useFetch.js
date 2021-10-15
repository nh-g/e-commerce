// NPM Packages
import { useEffect, useState } from "react";

// Project files
import { getCollection } from "../scripts/firebase/fireStore";
import firestoreReference from "../scripts/firebase/firebase";
export default function useFetch(collection) {

  // State
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // Methods
  async function fetchData(someDatabase, someCollection) {
    try {
      const response = await getCollection(someDatabase, someCollection);
      setData(response);
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  }

  // Hook
  useEffect(() => {
    fetchData(firestoreReference, collection);
  }, [fetchData]);

  return { data, error, loading, setData };
}
