import { createStore } from "vuex";
import flitsModule from "./flits";
import authModule from "./auth";


export default createStore({
    state: {},
    getters: {},
    mutations: {},
    actions: {},
    modules: {
        flits: flitsModule,
        auth: authModule,
    },
});
