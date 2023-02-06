import { MutationTree } from "vuex";
import { ILoginState } from "./state";

const mutations: MutationTree<ILoginState> = {
    setToken (state, token:string) {
        return state.token = token
    },
    setIsLogged (state, isLogged:boolean) {
        return state.isLogged = isLogged
    }

}

export default mutations