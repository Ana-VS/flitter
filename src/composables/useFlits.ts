import { computed } from "vue";
import { useStore } from "vuex";
import { searchFlits } from "@/models/IsearchFlit";

const useFlits = () => {
    const store = useStore();
    return {
        //GETTERS
        flits: computed(() => store.getters["flits/getFlits"]),
        isLoading: computed(() => store.getters["flits/isLoading"]),

        //MUTATIONS
        
        //ACTIONS
        fetchFlits: (search: searchFlits) => {
            store.dispatch("flits/fetchFlits", search);
        },
    };
};
export default useFlits;
