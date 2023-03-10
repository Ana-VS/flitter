import { Module } from "vuex";
import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";
import state, { ILoginState } from "./state";

const loginModule: Module<ILoginState, any> = {
    namespaced: true,
    state, 
    getters,
    mutations, 
    actions,
}

export default loginModule;