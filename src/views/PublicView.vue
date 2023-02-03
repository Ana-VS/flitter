<template>
  <div class="home">
    <NavBar></NavBar>
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavBar from '@/components/NavBar.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'PublicView',
  components: {
    NavBar,
  },
});
</script>
