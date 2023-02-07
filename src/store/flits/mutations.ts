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
};
export default mutations;
