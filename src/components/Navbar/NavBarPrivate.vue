<template>
    <nav>
        <div class="section" id="sectionLeft">
            <ul>
                <li id="AppName">
                    <router-link
                        class="navbar-brand"
                        :to="{ name: 'home' }"
                        >Flitter</router-link
                    >
                </li>
            </ul>
        </div>
        <div class="section" id="sectionMiddle">
            <searchBox />
        </div>
        <div class="section" id="sectionRight">
            <ul>
                <li>
                    <button class="btn">
                        <router-link :to="{ name: 'profile' }"
                            >My Profile
                        </router-link
                        >
                    </button>
                </li>
                <!-- <li @click="logOut"> -->
                <li>
                    <button class="btn" @click="logout">
                        <router-link :to="{ name: 'login' }">Log Out</router-link>
                    </button>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import searchBox from "@/components/Navbar/seachBox.vue";
import useAuth from "@/composables/useAuth";
// import useAuth from "@/composables/useAuth";
export default defineComponent({
    name: "PrivateNavbar",
    components: {
        searchBox,
    },
    setup() {
        const { user, logout } = useAuth();
        const idUser = localStorage.getItem("idUser");
        // const { logOut } = useAuth();
        return {
            logout,
            idUser,
            user,
        };
    },
});
</script>

<style scoped>
nav {
    min-height: 50px;
    max-height: 130px;
    padding: 10px;
    display: flex;
    justify-content: space-between !important;
    padding: 10px 3% 0px 3%;
    margin-bottom: 10px;
    background: white;
}
.section {
    width: 33%;
    display: flex;
    align-items: center;
}
ul {
    display: flex;
    justify-content: center;
    list-style: none;
}
li {
    padding: 1rem;
    font-weight: bold;
}
a {
    color: white;
    text-decoration: none;
    font-size: 14pt;
    padding: 10px;
    text-shadow: #454851 1px 1px 2px;
}

#AppName a {
    color: #4a3aff !important;
}
.btn {
    background-color: #4a3aff;
    padding: 10px;
    border-radius: 20px;
}
.btn:hover,
#AppName:hover {
    transform: scale(1.1);
}

#AppName a {
    font-size: 30pt;
    padding: 20p;
}

#sectionRight {
    display: flex;
    justify-content: flex-end;
}
#sectionMiddle {
    padding-left: 5%;
}
</style>
