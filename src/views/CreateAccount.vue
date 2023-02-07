<template>
    <NavBar></NavBar>
    <signupForm />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavBar from "@/components/Navbar/NavBarMain.vue";
import signupForm from "@/components/Forms/signupForm.vue";

export default defineComponent({
    name: "LoginView",
    components: {
        NavBar,
        signupForm,
    },
});
</script>

<style scoped></style>
