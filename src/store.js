import { defineStore } from "pinia";
import { watchEffect } from "vue";
import { projectFirestore } from "@/firebase/config";

export const useChatStore = defineStore("chatStore", {
  state: () => {
    return {
      currentRoom: "message",
      error: "",
      documents: [],
    };
  },
  getters: {
    getCurrentRoom: (state) => state.currentRoom,
    getError: (state) => state.error,
    getDocuments: (state) => state.documents,
  },
  actions: {
    setCurrentRoom(currentRoom) {
      this.currentRoom = currentRoom;
    },
    async getCollection() {
      let collectionRef = projectFirestore
        .collection(this.$state.currentRoom)
        .orderBy("createdAt");

      const unsub = collectionRef.onSnapshot(
        (snap) => {
          let results = [];
          snap.docs.forEach((doc) => {
            doc.data().createdAt && results.push({ ...doc.data(), id: doc.id });
          });
          this.$state.documents = results;
          this.$state.error = null;
        },
        (err) => {
          console.log(err.message);
          this.$state.documents = null;
          this.$state.error = null;
        }
      );

      watchEffect((onInvalidate) => {
        // unsub from prev collection when watcher is stopped (componente unmounted)

        onInvalidate(() => unsub());
      });
    },
  },
});
