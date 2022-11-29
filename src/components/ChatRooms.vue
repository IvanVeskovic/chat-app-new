<template>
  <div class="chat-rooms">
    <div class="chat-rooms__room" @click="handleClick('message')">#home</div>
    <div class="chat-rooms__room" @click="handleClick('tech')">#tech</div>
    <div class="chat-rooms__room" @click="handleClick('cars')">#cars</div>
  </div>
</template>

<script setup>
import { useChatStore } from "@/store";

const chatStore = useChatStore();

const handleClick = (currentRoom) => {
  chatStore.setCurrentRoom(currentRoom);
};
</script>

<style lang="scss">
.chat-rooms {
  display: flex;
  justify-content: center;
  padding: 15px 0;
  border-bottom: 2px solid #299bf8;

  &__room {
    font-size: 20px;
    font-style: italic;
    cursor: pointer;
    flex: 1;
    text-align: center;

    &:hover {
      color: #299bf8;
    }

    &:not(:last-child) {
      border-right: 1px solid #299bf8;
    }
  }
}
</style>
