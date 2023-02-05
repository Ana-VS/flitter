import { GetterTree } from "vuex";
import { IState } from "..";
import { IUserState } from "./state";

const getters: GetterTree<IUserState, IState> = {
    getUser(state) {
        return state.user;
    },
    getIsLoading(state) {
        return state.isLoading;
    },
};

export default getters;
