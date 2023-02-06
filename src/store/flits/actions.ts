import flitterApi from "@/api/flitterApi";
import { Flit } from "@/models/flit";
import { AxiosResponse } from "axios";
import { ActionTree } from "vuex";
import { IState } from "..";
import { IFlitState } from "./state";
import { searchFlits } from "@/models/IsearchFlit";

const actions: ActionTree<IFlitState, IState> = {
    async fetchFlits({ commit }, search: searchFlits) {
        // uso un array para mandar la información para filtar en la petición http
        // usamos la mutación para poner isLoading = true
        commit("setIsLoading", true);

        //???AÑADIR BÚSQUEDA POR PARÁMETROS SEGÚN API
        // obtenemos los datos de manera asíncrona, array de usuarios
        const { data } = await flitterApi.get<unknown, AxiosResponse<Flit[]>>(
            `/products?offset=${search.pageMin}&limit=${search.pageMin}}`
        );

        // usamos la mutación para poner isLoading = false
        commit("setIsLoading", false);

        // usamos la mutación para volcar los datos obtenidos en la variable del state products
        commit("setFlits", data);
    },
};

export default actions;
