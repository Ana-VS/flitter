import { GetterTree } from "vuex";
import { ILoginState } from "./state";

const getters: GetterTree <ILoginState, any> = {
    getUser (state) {
        return state.user;
    }
}

export default getters