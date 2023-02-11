import flitterApi from "@/api/flitterApi";
import { Flit } from "@/models/flit";
import { AxiosResponse } from "axios";
import { ActionTree } from "vuex";
import { IFlitState } from "./state";
import { searchFlits } from "@/models/IsearchFlit";

const actions: ActionTree<IFlitState, any> = {
    async fetchFlits({ commit }, search: searchFlits) {
        // uso un array para mandar la información para filtar en la petición http
        // usamos la mutación para poner isLoading = true
        commit("setIsLoading", true);

        //???AÑADIR BÚSQUEDA POR PARÁMETROS SEGÚN API

        let queryParams = `/tweets`;
        const params = [];
        if (search.limit) params.push(`limit=${search.limit}`);
        if (search.skip) params.push(`skip=${search.skip}`);
        if (search.sort) params.push(`sort=${search.sort}`);
        if (search.userIds) {
            for (const userId of search.userIds) {
                params.push(`userIds=${userId}`);
            }
        }
        if (search.text) params.push(`text=${search.text}`);

        if (params) {
            queryParams += `?${params.join("&")}`;
        }

        // obtenemos los datos de manera asíncrona, array de tweets
        const { data } = await flitterApi.get<unknown, AxiosResponse<{ tweets: Flit[] }>>(
            queryParams
        );

        // usamos la mutación para poner isLoading = false
        commit("setIsLoading", false);

        // usamos la mutación para volcar los datos obtenidos en la variable del state tweets
        commit("setFlits", data.tweets);
    },
    async addFlit({ commit }, newFlit: { text?: string, imageUrl?: string }) {
        try {
            const { data } = await flitterApi.post<unknown, AxiosResponse<{ tweet: Flit }>>(
                '/tweets',
                { tweet: newFlit },
            );
            // usamos la mutacion para agregar el flit
            commit("addFlit", data.tweet);
        } catch {
            // Retornamos falso si no lo pudimos crear (Esto quiere decir que no pusimos los fields requeridos)
            return false;
        }
        return true;
    },
    async deleteFlit({ commit }, id: string ) {
        try {
            await flitterApi.delete<unknown, AxiosResponse>(
                `/tweets/${id}`,
            );
            //  usamos la mutacion para quitar el flit
            commit("deleteFlit", id);
        } catch {
            // Retornamos falso si no lo pudimos crear (Esto quiere decir que no pusimos los fields requeridos)
            return false;
        }
        return true;
    },
    async toggleKudo({ commit }, id: string ) {
        try {
            const { data } = await flitterApi.post<unknown, AxiosResponse<{ tweet: Flit }>>(
                `/tweets/kudo-toggle/${id}`,
            );
            //  usamos la mutacion para quitar el flit
            commit("updateFlit", data.tweet);
        } catch {
            // Retornamos falso si no lo pudimos crear (Esto quiere decir que no pusimos los fields requeridos)
            return false;
        }
        return true;
    },
};

export default actions;
