import { Flit } from "@/models/flit";

export interface IFlitState {
    flits: Flit[];
    isLoading: boolean;
}

function state(): IFlitState {
    return {
        flits: [],
        isLoading: false,
    };
}
export default state;
