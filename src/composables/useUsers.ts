import { computed } from "vue";
import { useStore } from "vuex";

const useUsers = () => {
    const store = useStore();

    return {
        // GETTERS
        isLoading: computed(() => store.getters["users/getIsLoading"]),
        user: computed(() => store.getters["users/getUser"]),

        // ACTIONS
        fetchUserById: (userId: string) =>
            store.dispatch("users/fetchUserById", userId),
    };
};

export default useUsers;
