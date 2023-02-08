import { computed } from "vue";
import { useStore } from "vuex";
import { searchFlits } from "@/models/IsearchFlit";

const useFlits = () => {
    const store = useStore();
    return {
        //GETTERS
        flits: computed(() => store.getters["flits/getFlits"]),
        isLoading: computed(() => store.getters["flits/isLoading"]),
        
        //ACTIONS
        fetchFlits: (search: searchFlits) => store.dispatch("flits/fetchFlits", search),
        addFlit: (text: string, imageUrl: string) => store.dispatch("flits/addFlit", { text, imageUrl }),
        deleteFlit: (id: string) => store.dispatch("flits/deleteFlit", id),
        toggleKudo: (id: string) => store.dispatch("flits/toggleKudo", id),
    };
};
export default useFlits;
