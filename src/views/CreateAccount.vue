<template>
    <signupForm />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import signupForm from "@/components/Forms/signupForm.vue";

export default defineComponent({
    name: "LoginView",
    components: {
        signupForm,
    },
});
</script>

<style scoped></style>
