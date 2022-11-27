<template>
  <form @submit.prevent="handleSubmit">
    <input type="email" required placeholder="email" v-model="email" />
    <input type="password" required placeholder="password" v-model="password" />
    <div class="error">{{ error }}</div>
    <button>Log in</button>
  </form>
</template>

<script setup>
import { ref } from "vue";
import useLogin from "../composables/useLogin";
import { defineEmits } from "vue";

const emit = defineEmits(["login"]);

const email = ref("");
const password = ref("");

const { error, login } = useLogin();

const handleSubmit = async () => {
  await login(email.value, password.value);

  if (!error.value) {
    emit("login");
  }
};
</script>

<style></style>
