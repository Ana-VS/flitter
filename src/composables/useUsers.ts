import { computed } from "vue";
import { useStore } from "vuex";

const useUsers = () => {
    const store = useStore();

    return {
        //propiedad computada que llama al getter

        // GETTERS
        isLoading: computed(() => store.getters["users/getIsLoading"]),
        user: computed(() => store.getters["users/getUser"]),

        // ACTIONS
        fetchUserById: (userId: number) =>
            store.dispatch("users/fetchUserById", userId),
    };
};

export default useUsers;
