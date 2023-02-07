<template>
    <NavBar></NavBar>
    <div class="home">
        <FlitAdd />
        <FlitList />
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavBar from "@/components/Navbar/NavBarPrivate.vue";
import FlitAdd from "@/components/Flits-components/flitAdd.vue";
import FlitList from "@/components/Flits-components/flitsList.vue";

export default defineComponent({
    name: "PublicView",
    components: {
        NavBar,
        FlitAdd,
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
