import { User } from "@/models/user";
import { computed, ComputedRef } from "vue";
import { useStore } from "vuex";

const useUsers = () => {
    const store = useStore();

    return {
        // GETTERS
        user: computed(() => store.getters["auth/getUser"]) as ComputedRef<User | null>,

        // ACTIONS
        login: (email: string, password: string) => store.dispatch("auth/login", { email, password }),
        logout: () => store.dispatch("auth/logout"),
        verify: () => store.dispatch("auth/verify"),
        signUp: (email: string, password: string, username:string) => store.dispatch("users/sign-up", {email, password, username})
    };
};

export default useUsers;
