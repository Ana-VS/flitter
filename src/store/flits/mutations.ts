import { Flit } from "@/models/flit";
import { MutationTree } from "vuex";
import { IFlitState } from "./state";

const mutations: MutationTree<IFlitState> = {
    setFlits(state: IFlitState, flits: Flit[]) {
        state.flits = flits;
    },
    setIsLoading(state: IFlitState, value: boolean) {
        state.isLoading = value;
    },
    addFlit(state: IFlitState, newFlit: Flit) {
        state.flits = [newFlit, ...state.flits];
    },
    deleteFlit(state: IFlitState, id: string) {
        state.flits = state.flits.filter((f) => f._id !== id);
    },
    updateFlit(state: IFlitState, updatedFlit: Flit) {
        state.flits = state.flits.map((flit) => {
            if (flit._id == updatedFlit._id) return updatedFlit;
            return flit;
        })
    },
};
export default mutations;
