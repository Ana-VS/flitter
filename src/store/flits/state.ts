import { Flit } from "@/models/flits";

export interface IFlitState {
    flits: Flit [];
    isLoading: boolean;
    selectedFlit: Flit | null;
}

function state (): IFlitState {
    return {
        flits: [],
        isLoading: false,
        selectedFlit: null,
    }
}
export default state;