import { User } from "@/models/user";
import { createStore } from "vuex";
import flitsModule from "./flits";

export interface IState {
    authUser: User | null;
}

export default createStore({
    state: {
        authUser: null,
    },
    getters: {},
    mutations: {},
    actions: {},
    modules: {
        flits: flitsModule,
    },
});
