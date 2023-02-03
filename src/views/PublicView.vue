<template>
    <NavBar></NavBar>
    <searchBox />
    <div class="home">
        <FlitBox />
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavBar from "@/components/NavBar.vue";
import FlitBox from "@/components/flitBox.vue";
import searchBox from "@/components/seachBox.vue";

export default defineComponent({
    name: "PublicView",
    components: {
        NavBar,
        FlitBox,
        searchBox,
    },
});
</script>

<style scoped>
.home {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-content: center;
}
</style>
