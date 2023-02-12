<template>
    <nav>
        <div class="section" id="sectionLeft">
            <ul>
                <li id="AppName">
                    <router-link class="navbar-brand" :to="{ name: 'home' }"
                        >Flitter</router-link
                    >
                </li>
            </ul>
        </div>
        <div class="section" id="sectionRight">
            <ul>
                <li>
                    <button class="btn">
                        <router-link :to="{ path: `/profile/${user?._id}` }">
                            My Profile
                        </router-link>
                    </button>
                </li>
                <li>
                    <button class="btn">
                        <router-link :to="{ path: `/settings` }">
                            Settings
                        </router-link>
                    </button>
                </li>
                <li>
                    <button class="btn" @click="logout">
                        <router-link :to="{ name: 'login' }"
                            >Log Out</router-link
                        >
                    </button>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// import searchBox from "@/components/Navbar/seachBox.vue";
import useAuth from "@/composables/useAuth";
// import useAuth from "@/composables/useAuth";
export default defineComponent({
    name: "PrivateNavbar",
    // components: {
    //     searchBox,
    // },
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
    max-height: 90px;
    padding: 7px;
    display: flex;
    justify-content: space-between !important;
    padding: 10px 3% 0px 3%;
    margin-bottom: 10px;
    background: white;
}
.section {
    width: 50%;
    display: flex;
    align-items: center;
}
ul {
    display: flex;
    justify-content: center;
    list-style: none;
}
li {
    padding: 1px 10px 1px 10px;
    font-weight: bold;
}
a {
    color: white !important;
    text-decoration: none;
    font-size: 12pt;
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
.btn:hover {
    background-color: #4a3aff;
    color: white !important;
    padding: 10px;
    border-radius: 20px;
    transform: scale(1.1) !important;
}

#AppName:hover {
    transform: scale(1.1);
}

#AppName a {
    font-size: 28pt;
    padding: 20p;
}

#sectionRight {
    display: flex;
    justify-content: right;
    padding-right: 30px;
}
</style>
