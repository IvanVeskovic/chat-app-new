<template>
  <div class="container">
    <Navbar />
    <ChatRooms />
    <ChatWindow />
    <NewChatForm />
  </div>
</template>

<script setup>
import NewChatForm from "../components/NewChatForm.vue";
import ChatWindow from "../components/ChatWindow.vue";
import Navbar from "../components/Navbar.vue";
import ChatRooms from "../components/ChatRooms.vue";
import getUser from "../composables/getUser";
import { watch } from "@vue/runtime-core";
import { useRouter } from "vue-router";

const { user } = getUser();
const router = useRouter();

watch(user, () => {
  if (!user.value) {
    router.push({ name: "Welcome" });
  }
});
</script>

<style></style>
