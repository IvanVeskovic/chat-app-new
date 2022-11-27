<template>
  <form>
    <textarea
      placeholder="Type a message and hit enter to send..."
      v-model="message"
      @keypress.enter.prevent="handleSubmit"
    ></textarea>
    <div class="error">{{ error }}</div>
  </form>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import getUser from "../composables/getUser";
import useCollection from "../composables/useCollection";

import { timestamp } from "../firebase/config";

const { user } = getUser();
const { addDoc, error } = useCollection("message");

const message = ref("");

const handleSubmit = async () => {
  const chat = {
    name: user.value.displayName,
    message: message.value,
    createdAt: timestamp(),
  };

  if (chat.message) {
    await addDoc(chat);
    if (!error.value) {
      message.value = "";
    }
  }
};
</script>

<style scoped lang="scss">
form {
  margin: 10px;
}

textarea {
  width: 100%;
  max-width: 100%;
  margin-bottom: 6px;
  padding: 10px;
  box-sizing: border-box;
  border: 0;
  border-radius: 20px;
  font-family: inherit;
  outline: none;
}
</style>
