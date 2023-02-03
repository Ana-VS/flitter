<template>
    <div class="home">
        <NavBar></NavBar>
        <FlitBox />
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavBar from "@/components/NavBar.vue";
import FlitBox from "@/components/flitBox.vue";

export default defineComponent({
    name: "PublicView",
    components: {
        NavBar,
        FlitBox,
    },
});
</script>

<style scoped>
.home {
    display: flex;
    flex-direction: column;
    justify-content: center;
}
</style>
