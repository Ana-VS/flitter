<template>
    <div v-if="user">
        <div class="UserProfile-box">
            <div class="UsernameFollow-box">
                <h2 id="username-text">{{ user?.username }} ({{ user?.email }})</h2>
                <v-sheet v-if="user?._id !== currentUser?._id">
                    <v-sheet v-if="currentUser?.followingIds?.includes(user?._id)">
                        <button class="follow-btn">Dejar de seguir</button>
                    </v-sheet>
                    <v-sheet>
                        <button class="follow-btn">Seguir</button>
                    </v-sheet>

                </v-sheet>
            </div>
        </div>
        <FlitList :userIds="[user._id]"/>
    </div>

    <div v-else>
        Loading...
    </div>
</template>
<script lang="ts">
import useAuth from "@/composables/useAuth";
import FlitList from "@/components/Flits-components/flitsList.vue";
import { defineComponent, onMounted, ref } from "vue";
import flitterApi from "@/api/flitterApi";
import { useRouter } from "vue-router";
import { User } from "@/models/user";
import { AxiosResponse } from "axios";

export default defineComponent({
    name: "UserProfile",
    props: {
        userId: {
            type: String,
            required: true,
        },
    },
    setup(props) {
        const router = useRouter();
        const currentUser = useAuth().user;
        const user = ref(null as (User | null));

        const loadUser = async () => {
            try {
                const response = await flitterApi.get<unknown, AxiosResponse<{ user: User }>>(
                    `/users/${props.userId}`,
                );

                user.value = response.data.user;
            } catch {
                router.push('/404');
            }
        }

        // Cargar los datos del usuario
        onMounted(() => {
            loadUser();
        });

        return {
            user,
            currentUser,
        };
    },
    components: {
        FlitList,
    },
});
</script>

<style scoped>
.UserProfile-box {
    align-content: center !important;
    width: 70%;
    background: white;
    padding: 20px;
    border-radius: 20px;
    margin: 25px 15% 25px 15%;
}

.UsernameFollow-box {
    display: flex;
    width: 60%;
    padding: 5px;
}

.username-text {
    padding: 15px;
    flex-grow: 1;
}

.follow-btn {
    background-color: #4a3aff;
    color: white;
    border: 0px;
    font-size: 14pt;
    padding: 15px;
    align-self: center;
    width: 150px !important;
    font-weight: bold;
    border-radius: 20px !important;    
    margin-left: 100px;
}

</style>
