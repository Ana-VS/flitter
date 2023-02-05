import { User } from "@/models/user";
import { MutationTree } from "vuex";
import { IUserState } from "./state";

const mutations: MutationTree<IUserState> = {
    setUser(state: IUserState, user: User) {
        state.user = user;
    },
    setIsLoading(state: IUserState, value: boolean) {
        state.isLoading = value;
    },
};

export default mutations;
