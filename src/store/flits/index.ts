import { Module } from "vuex";
import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";
import state, { IFlitState } from "./state";

const flitsModule: Module<IFlitState, any> = {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
}

export default flitsModule;
