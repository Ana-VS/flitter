import flitterApi from "@/api/flitterApi";
import { User } from "@/models/user";
import { AxiosResponse } from "axios";
import { ActionTree } from "vuex";
import { IState } from "..";
import { IUserState } from "./state";

const actions: ActionTree<IUserState, IState> = {
    async fetchUserById({ commit }, userId: string) {
        commit("setIsLoading", true);

        const { data } = await flitterApi.get<unknown, AxiosResponse<User>>(
            `/users/${userId}`
        );

        commit("setIsLoading", false);

        commit("setSelectedUser", data);
    },
};

export default actions;
