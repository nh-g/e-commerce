import { useEffect, useState } from "react";
import { getFirestore } from "firebase/firestore/lite";

import firebaseInstance from "../scripts/firebase/firebase";
import { getCollection } from "../scripts/firebase/fireStore";

export default function useFetch(collection) {
  // STATES
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const database = getFirestore(firebaseInstance);

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

  //hook
  useEffect(() => {
    fetchData(database, collection);
  }, [database, collection]);

  return { data, error, loading, setData };
}
