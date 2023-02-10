<template>
    <login-form></login-form>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import loginForm from "@/components/Forms/loginForm.vue";

export default defineComponent({
    name: "LoginView",
    components: {
        loginForm,
    },
});
</script>

<style scoped></style>
