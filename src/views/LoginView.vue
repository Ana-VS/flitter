<template>
    <NavBar></NavBar>
    <login-form></login-form>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavBar from "@/components/Navbar/NavBarMain.vue";
import loginForm from "@/components/Forms/loginForm.vue";

export default defineComponent({
    name: "LoginView",
    components: {
        NavBar,
        loginForm,
    },
});
</script>

<style scoped></style>
