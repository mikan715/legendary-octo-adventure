<script>
import { RouterView, useRouter } from "vue-router";
import { config } from "./api/Config";

const router = useRouter();
</script>

<template>
  <div>
    <main @keyup.esc="router.push({ name: 'login' })">
      <RouterView />
    </main>
  </div>
</template>
