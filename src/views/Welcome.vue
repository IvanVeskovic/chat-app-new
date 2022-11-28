<template>
  <div class="welcome container">
    <p>welcome</p>
    <div v-if="showLogin">
      <h2>Login</h2>
      <LoginForm @login="enterChat" />
      <p>
        No account yet? <span @click="showLogin = false">Signup</span> instead
      </p>
    </div>
    <div v-else>
      <h2>Sign up</h2>
      <SignupForm @signup="enterChat" />
      <p>
        Already regisred? <span @click="showLogin = true">Login</span> instead
      </p>
    </div>
  </div>
</template>

<script setup>
import SignupForm from "../components/SignupForm.vue";
import LoginForm from "../components/LoginForm.vue";
import { ref } from "@vue/reactivity";
import { useRouter } from "vue-router";

const showLogin = ref(true);
const router = useRouter();

const enterChat = () => {
  router.push({ name: "Chatroom" });
};
</script>

<style lang="scss">
.welcome {
  text-align: center;
  padding: 20px 0;
  form {
    width: 300px;
    margin: 20px auto;
  }
  label {
    display: block;
    margin: 20px 0 10px;
  }
  input {
    width: 100%;
    padding: 10px;
    border-radius: 3px;
    border: 1px solid #eee;
    outline: none;
    color: #999;
    margin: 10px auto;
  }
  span {
    font-weight: bold;
    text-decoration: underline;
    cursor: pointer;

    &:hover {
      color: #299bf8;
    }
  }
  button {
    margin: 20px auto;
    cursor: pointer;
  }
}
</style>
