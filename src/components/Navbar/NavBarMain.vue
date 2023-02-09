<template>
    <NavBarPrivate v-if="user"/>
    <NavBarPublic v-else />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavBarPublic from "@/components/Navbar/NavBarPublic.vue";
import NavBarPrivate from "@/components/Navbar/NavBarPrivate.vue";
import useAuth from "@/composables/useAuth";

export default defineComponent({
    name: "LoginView",
    setup() {
        const { user } = useAuth();

        console.log("aca? ", user.value);
        return { user }
    },
    components: {
        NavBarPublic,
        NavBarPrivate,
    },
});
</script>

<style scoped></style>
