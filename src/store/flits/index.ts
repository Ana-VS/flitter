import { Module } from "vuex"
import { IState } from ".."
import getters from "./getters"
import mutations from "./mutations"
import state, { IFlitState } from "./state"

const flitsModule: Module <IFlitState, IState> = {
    namespaced: true,
    state,
    getters,
    mutations,
}

export default flitsModule

