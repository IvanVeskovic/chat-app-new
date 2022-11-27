<template>
  <div class="chat-rooms">
    <div class="room" @click="handleClick('home')">home</div>
    <div class="room" @click="handleClick('tech')">tech</div>
    <div class="room" @click="handleClick('cars')">cars</div>
    <div class="room" @click="handleClick('general')">general</div>
    <div>{{ currentRoom }}</div>
  </div>
</template>

<script setup>
import { useChatStore } from "@/store";
import { computed } from "vue";

const store = useChatStore();

const currentRoom = computed(() => store.getCurrentRoom);

const handleClick = (currentRoom) => {
  store.setCurrentRoom(currentRoom);
};
</script>

<style></style>
