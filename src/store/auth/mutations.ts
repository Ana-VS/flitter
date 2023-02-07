import { User } from "@/models/user";
import { MutationTree } from "vuex";
import { ILoginState } from "./state";

const mutations: MutationTree<ILoginState> = {
    setUser (state, user: User) {
        return state.user = user;
    }
}

export default mutations