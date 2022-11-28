import { defineStore } from "pinia";

export const useChatStore = defineStore("chatStore", {
  state: () => {
    return {
      currentRoom: "home",
    };
  },
  getters: {
    getCurrentRoom: (state) => state.currentRoom,
  },
  actions: {
    setCurrentRoom(currentRoom) {
      this.currentRoom = currentRoom;
    },
  },
});
