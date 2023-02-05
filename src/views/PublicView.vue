<template>
    <NavBar></NavBar>
    <searchBox />
    <div class="home">
        <FlitList />
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavBar from "@/components/Navbar/NavBarPublic.vue";
import FlitList from "@/components/Flits-components/flitsList.vue";

export default defineComponent({
    name: "PublicView",
    components: {
        NavBar,
        FlitList,
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
