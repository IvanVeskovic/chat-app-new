import { ref, watchEffect } from "vue";
import { projectFirestore } from "../firebase/config";

const getCollection = (collection) => {
  const documents = ref(null);
  const error = ref(null);

  let collectionRef = projectFirestore
    .collection(collection)
    .orderBy("createdAt");

  console.log(collectionRef.value);

  const unsub = collectionRef.onSnapshot(
    (snap) => {
      let results = [];
      snap.docs.forEach((doc) => {
        doc.data().createdAt && results.push({ ...doc.data(), id: doc.id });
      });
      documents.value = results;
      debugger;
      error.value = null;
    },
    (err) => {
      console.log(err.message);
      documents.value = null;
      error.value = null;
    }
  );

  watchEffect((onInvalidate) => {
    // unsub from prev collection when watcher is stopped (componente unmounted)

    onInvalidate(() => unsub());
  });

  return { documents, error };
};

export default getCollection;
