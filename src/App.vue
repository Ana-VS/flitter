<template>
    <router-view />
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
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;800&display=swap");

* {
    padding: 0px;
    margin: 0px;
}

#app {
    font-family: Inter;
    text-align: left;
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
