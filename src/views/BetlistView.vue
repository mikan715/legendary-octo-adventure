<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useDataStore } from "../stores/dataStore";
import { useRouter } from "vue-router";

const dataStore = useDataStore();
const router = useRouter();
const data = ref({});

onMounted(() => {
  data.value = dataStore.userData;
});
</script>

<template>
  <div>
    <button
      class="btn btn-secondary"
      @click="router.push({ name: 'dashboard' })"
    >
      Back
    </button>
    <div>Kontostand: {{ dataStore.userData.balance }}</div>
    <div>User: {{ dataStore.userData.name }}</div>
    <div>Historie</div>
    <div v-for="item in dataStore.userData.bets">
      <div v-if="item.checked_bet">
        <div>{{ item }}</div>
      </div>
    </div>
    <div>Laufen noch</div>
    <div v-for="item in dataStore.userData.bets">
      <div v-if="!item.checked_bet">
        <div>{{ item }}</div>
      </div>
    </div>
  </div>
</template>
