<template>
    <NavBar></NavBar>
    <div class="home">
        <div class="content">
            <FlitAdd v-if="user"/>
            <FlitList />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavBar from "@/components/Navbar/NavBarMain.vue";
import FlitAdd from "@/components/Flits-components/flitAdd.vue";
import FlitList from "@/components/Flits-components/flitsList.vue";
import useAuth from "@/composables/useAuth";

export default defineComponent({
    name: "FlitsView",
    components: {
        NavBar,
        FlitAdd,
        FlitList,
    },
    setup() {
        const { user } = useAuth();
        return { user }
    }
});
</script>

<style scoped>
.home {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-content: center !important;
}

.content {
    display: flex;
    flex-direction: column;
    justify-content: center;
}
</style>
