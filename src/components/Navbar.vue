<template>
  <nav v-if="user">
    <div>
      <p>Hey there {{ user.displayName }}</p>
      <p class="email">Currently logged in as {{ user.email }}</p>
    </div>
    <button @click="handleClick">Loggout</button>
  </nav>
</template>

<script setup>
import useLogout from "../composables/useLogout";
import getUser from "../composables/getUser";

const { logout, error } = useLogout();
const { user } = getUser();

const handleClick = async () => {
  await logout();

  if (!error.value) {
    console.log("User logged out ");
  }
};
</script>

<style lang="scss">
nav {
  padding: 20px;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    margin: 2px auto;
    font-size: 16px;
    color: #444;

    &.email {
      font-size: 14px;
      color: #999;
    }
  }
}
</style>
