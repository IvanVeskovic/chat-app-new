<template>
  <div class="chat-window">
    <div v-if="error">{{ error }}</div>
    <div v-if="documents" class="messages" ref="messages">
      <div
        v-for="doc in formattedDocuments"
        :key="doc.id"
        class="message"
        :class="{ current: user.value.displayName === doc.name }"
      >
        <div class="message__wrapper">
          <span class="message__name"> {{ doc.name }}</span>
          <span class="message__created">{{ doc.createdAt }}</span>
        </div>
        <span class="message__text">{{ doc.message }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import getCollection from "../composables/getCollection";
import { formatDistanceToNow } from "date-fns";
import { computed, onUpdated, ref } from "@vue/runtime-core";
import getUser from "@/composables/getUser";

const { error, documents } = getCollection("message");

const formattedDocuments = computed(() => {
  if (documents.value) {
    return documents.value.map((doc) => {
      let time = formatDistanceToNow(doc.createdAt.toDate());
      return { ...doc, createdAt: time };
    });
  }
});

const user = computed(() => {
  const { user } = getUser();
  return user;
});

// Auto scroll to bottom messages
const messages = ref(null);

onUpdated(() => {
  messages.value.scrollTop = messages.value.scrollHeight;
});
</script>

<style scoped lang="scss">
.chat-window {
  background: #fafafa;
  padding: 0 20px;
}

.message {
  margin: 18px 0;
  display: flex;
  flex-direction: column;

  &.current {
    align-items: flex-end;

    .message {
      &__wrapper {
        justify-content: flex-end;
      }

      &__name {
        font-size: 16px;
        order: 2;
        margin: 0 0 0 6px;
        color: #3498db;
      }

      &__text {
        background-image: linear-gradient(to right bottom, #3498db, #2980b9);
        color: #ecf0f1;
      }

      &__created {
        margin-left: auto;
      }
    }

    & > * {
      text-align: right;
    }
  }

  &__wrapper {
    display: flex;
    align-items: baseline;
    width: 100%;
    margin-bottom: 5px;
  }

  &__created {
    display: block;
    color: #aab4bf;
    font-size: 10px;
    display: none;
  }

  &__name {
    margin-right: 6px;
    align-items: flex-end;
    color: #2c3e50;
    text-transform: capitalize;
    font-size: 14px;
    color: #2ecc71;
    font-style: italic;
  }

  &__text {
    padding: 10px 15px;
    border-radius: 5px;
    color: #ecf0f1;
    background-image: linear-gradient(to right bottom, #2ecc71, #27ae60);
    width: fit-content;
  }

  &:hover {
    .message__created {
      display: block;
    }
  }
}

.messages {
  max-height: 400px;
  overflow: auto;

  /* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }
}
</style>
