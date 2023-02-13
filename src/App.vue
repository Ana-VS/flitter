<template>
    <v-sheet v-if="isLoading"> LOADING... </v-sheet>
    <v-sheet v-else>
        <div id="screen">
            <NavBar></NavBar>
            <router-view />
        </div>
    </v-sheet>

    <custom-footer>
        <template v-slot:leftfootersection>
            <div class="footer-text">
                <h4>Proyecto Final KeepCoding</h4>
                <h3>
                    <n>By <i>Padawanas</i></n>
                </h3>
            </div>
        </template>
    </custom-footer>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import CustomFooter from "@/components/CustomFooter.vue";
import NavBar from "@/components/Navbar/NavBarMain.vue";
import useAuth from "./composables/useAuth";

export default defineComponent({
    name: "AppVue",
    setup() {
        const isLoading = ref(true);
        const { user, verify } = useAuth();

        // Tratar de obtener al usuario logeado
        const localVerify = async () => {
            isLoading.value = true;
            await verify();
            isLoading.value = false;
        };
        onMounted(() => {
            localVerify();
        });

        return {
            isLoading,
            user,
        };
    },
    components: {
        CustomFooter,
        NavBar,
    },
});
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Arvo&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;800&display=swap");

* {
    padding: 0px;
    margin: 0px;
}

#app {
    font-family: Inter;
    text-align: left;
    background: #f2f2f2;
}

#screen {
    min-height: 100vh;
}
nav {
    padding: 30px;
}

nav a {
    font-weight: bold;
}

.footer-text h4 {
    font-size: 12pt;
}
.footer-text h3 {
    font-size: 10pt;
}

custom-footer {
    margin: 0;
}
</style>
