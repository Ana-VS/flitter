<template>
    <NavBar></NavBar>
    <UserProfileCard />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavBar from "@/components/Navbar/NavBarMain.vue";
import UserProfileCard from "@/components/UserProfileCard.vue";

export default defineComponent({
    components: { NavBar, UserProfileCard },
});
</script>
