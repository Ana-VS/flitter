import { GetterTree } from "vuex";
import { IFlitState } from "./state";

const getters: GetterTree <IFlitState, any> = {
    getFlits (state) {
        return state.flits
    }, 
    getIsLoading (state) {
        return state.isLoading
    },
}

export default getters