// NPM Packages
import { useEffect, useCallback, useState } from "react";

// Project files
import { getCollection } from "../scripts/firebase/fireStore";
import firestoreReference from "../scripts/firebase/firebase";
export default function useFetch(collection) {
  // State
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // Methods
  const fetchData = useCallback(async(database, collection) => {
    try {
      const response = await getCollection(database, collection);
      setData(response);
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  },[])

  useEffect(() => {
    fetchData(firestoreReference, collection);
  }, [fetchData]);

  return { data, error, loading, setData };
}
