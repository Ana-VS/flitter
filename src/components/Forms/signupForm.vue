<template>
    <div class="formArea">
        <div class="form">
            <h2 class="formTittle">Sign Up</h2>
            <form>
                <div class="formSection">
                    <label for="">Email address</label>
                    <input
                        type="text"
                        placeholder="myemail@flitter.com"
                        pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
                        required
                        v-model="email"
                    />
                </div>
                <div class="formSection">
                    <label for="">Username</label>
                    <input
                        type="text"
                        placeholder="myUsername"
                        onkeydown="return /[a-zA-Z]/i.test(event.key)"
                        required
                        v-model="username"
                    />
                </div>
                <div class="formSection">
                    <label for="">Password</label>
                    <input
                        type="password"
                        placeholder="Password"
                        required
                        v-model="password"
                    />
                </div>

                <div class="errorSection" v-if="errorMessage">
                    {{ errorMessage }}
                </div>

                <div class="formSection">
                    <input
                        class="formBtn"
                        type="submit"
                        value="Sign Up"
                        @click.prevent="signUp"
                    />
                </div>

                <div class="formSection">
                    <p>
                        Are you already a member?
                        <router-link :to="{ name: 'login' }"
                            >Log In</router-link
                        >
                    </p>
                </div>
            </form>
        </div>
    </div>
</template>

<script lang="ts">
import useAuth from "@/composables/useAuth";

import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
    name: "signUpForm",
    setup() {
        const router = useRouter();

        const email = ref("");
        const username = ref("");
        const password = ref("");

        const isLoading = ref(false);
        const errorMessage = ref("");

        const { signUp } = useAuth();
        return {
            email,
            username,
            password,
            errorMessage,
            isLoading,
            signUp: async () => {
                isLoading.value = true;
                errorMessage.value = "";

                const success = await signUp(
                    email.value,
                    password.value,
                    username.value
                );
                if (success) router.push("/");
                else errorMessage.value = "Datos invalidos o ya utilizados.";

                isLoading.value = false;
            },
        };
    },
});
</script>

<style scoped>
.formArea {
    padding: 0px 0px 40px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.form {
    /* background-image: url("@/assets/imgs/form-Background.jpg"); */
    background-color: #e7f0fc;
    padding: 20px 35px;
    border-radius: 30px;
}

.formTittle {
    text-align: center;
    font-size: 26pt;
    font-weight: 800;
    padding: 7px 7px 0px 7px;
}
.formSection {
    display: flex;
    flex-direction: column;
    padding: 10px 15px;
}

.formSection label {
    font-size: 11pt;
    font-weight: bold;
    width: 400px;
    padding: 10px;
    border-radius: 15px;
    border-color: gray;
}
.formSection input {
    font-size: 11pt;
    width: 400px;
    padding: 10px 20px;
    border-radius: 15px;
    border-color: gray;
}

.formBtn {
    background-color: #4a3aff;
    color: white;
    border: 0px;
    font-size: 14pt;
    margin: 15px;
    padding: 15px;
    align-self: center;
    width: 150px !important;
    font-weight: bold;
    border-radius: 20px !important;
}
.formBtn:hover {
    transform: scale(1.1);
}
.errorSection {
    display: flex;
    flex-direction: column;
    padding: 10px 15px;
    color: red;
}
</style>
