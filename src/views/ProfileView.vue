<template>
    <div v-if="user">
        <div class="UserProfile-box">
            <div class="UsernameFollow-box">
                <div class="User-data">
                    <div>
                        <img
                            src="@/assets/imgs/username.png"
                            alt="Username"
                            class="icon"
                        />
                        <h2>{{ user?.username }}</h2>
                    </div>
                    <div>
                        <img
                            src="@/assets/imgs/email.png"
                            alt="Email"
                            class="icon"
                        />
                        <h3>{{ user?.email }}</h3>
                    </div>
                </div>
                <v-sheet
                    v-if="currentUser?._id && user?._id !== currentUser?._id"
                >
                    <v-sheet
                        v-if="currentUser?.followingIds?.includes(user?._id)"
                    >
                        <button class="follow-btn" @click="followToggle">
                            Unfollow
                            <img
                                src="@/assets/imgs/unfollow.png"
                                alt="Unfollow"
                                class="icon-follow"
                            />
                        </button>
                    </v-sheet>
                    <v-sheet v-else>
                        <button class="follow-btn" @click="followToggle">
                            Follow
                            <img
                                src="@/assets/imgs/follow.png"
                                alt="follow"
                                class="icon-follow"
                            />
                        </button>
                    </v-sheet>
                </v-sheet>
            </div>
        </div>
        <FlitList :userIds="[user._id]" />
    </div>

    <div v-else>Loading...</div>
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
        const followToggleStore = useAuth().followToggle;
        const user = ref(null as User | null);

        const loadUser = async () => {
            try {
                const response = await flitterApi.get<
                    unknown,
                    AxiosResponse<{ user: User }>
                >(`/users/${props.userId}`);

                user.value = response.data.user;
            } catch {
                router.push("/404");
            }
        };

        // Cargar los datos del usuario
        onMounted(() => {
            loadUser();
        });

        return {
            user,
            currentUser,
            followToggle: () => {
                followToggleStore(props.userId);
            },
        };
    },
    components: {
        FlitList,
    },
});
</script>

<style scoped>
.UserProfile-box {
    width: 70%;
    background: white;
    padding: 20px;
    border-radius: 20px;
    margin: 25px 15% 25px 15%;
}

.UsernameFollow-box {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 15px;
}
.User-data div {
    font-size: 16pt;
    font-weight: bolder;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    margin: 10px;
}

.User-data div h2 {
    font-size: 16pt;
    font-weight: bolder;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    margin-bottom: 5px;
}

.User-data div h3 {
    font-size: 16pt;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    margin-bottom: 5px;
}
.follow-btn {
    background-color: #4a3aff;
    color: white;
    border: 0px;
    font-size: 12pt;
    padding: 15px;
    align-self: center;
    min-width: 160px !important;
    font-weight: bold;
    border-radius: 20px !important;
    margin-left: 100px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-around;
}

.follow-btn:hover {
    transform: scale(1.1);
}

.icon-follow {
    height: 25px;
}
.icon {
    height: 40px;
    margin-right: 10px;
}
</style>
