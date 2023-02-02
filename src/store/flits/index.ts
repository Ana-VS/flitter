import { Module } from "vuex"
import { IState } from ".."
import getters from "./getters"
import state, { IFlitState } from "./state"

const flitsModule: Module <IFlitState, IState> = {
    namespaced: true,
    state,
    getters,
}

export default flitsModule

