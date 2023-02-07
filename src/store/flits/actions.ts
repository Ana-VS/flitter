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
        let queryParams = `/tweets?skip=${search.skip}&limit=${search.limit}`;
        if (search.userId) queryParams += `&userId=${search.userId}}`
        if (search.text) queryParams += `&text=${search.text}}`
        // obtenemos los datos de manera asíncrona, array de tweets
        const { data } = await flitterApi.get<unknown, AxiosResponse<{ tweets: Flit[] }>>(
            queryParams
        );

        // usamos la mutación para poner isLoading = false
        commit("setIsLoading", false);

        // usamos la mutación para volcar los datos obtenidos en la variable del state tweets
        commit("setFlits", data.tweets);
    },
};

export default actions;
