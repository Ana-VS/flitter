<template>
    <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
    </nav>
    <router-view />
    <custom-footer>
        <template v-slot:leftfootersection>
            <div>
                <h4>Proyecto Final KeepCoding</h4>
                <h3><n>Padawanas</n></h3>
            </div>
        </template>
    </custom-footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CustomFooter from "@/components/CustomFooter.vue";

export default defineComponent({
    name: "AppVue",
    components: {
        CustomFooter,
    },
});
</script>
p

<style>
@import url("https://fonts.googleapis.com/css2?family=Arvo&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap");

* {
    padding: 0;
    margin: 0;
}
#app {
    font-family: Arvo;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

nav {
    padding: 30px;
}

nav a {
    font-weight: bold;
    color: #2c3e50;
}

nav a.router-link-exact-active {
    color: #42b983;
}
</style>
