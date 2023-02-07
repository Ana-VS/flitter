import { GetterTree } from "vuex";
import { IState } from "..";
import { IFlitState } from "./state";

const getters: GetterTree <IFlitState, IState> = {
    getFlits (state) {
        return state.flits
    }, 
    getIsLoading (state) {
        return state.isLoading
    },
}

export default getters