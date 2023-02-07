import { ActionTree } from "vuex";
import flitterApi from "@/api/flitterApi";
import { ILoginState } from "./state";
import { AxiosResponse } from "axios";
import { User } from "@/models/user";


const actions: ActionTree<ILoginState, any> = {
    async login({ commit }, loginData: { email: string, password: string }) : Promise<boolean> {
        try {
            const { data } = await flitterApi.post<unknown, AxiosResponse<{ user: User }>>(
                '/auth/login',
                loginData,
            );
            commit("setUser", data.user);
        } catch {
            // Si no podemos logearns esto quiere decir que tenemos algun problema
            // con la info del login
            return false;
        }        
        return true;
    },

    // Verificamos si ya tenemos una cookie con un usuario logeado pidiendo la data del usuario
    async verify({ commit }) : Promise<boolean> {
        // Nos encontramos cargando la data
        try {
            const { data } = await flitterApi.get<unknown, AxiosResponse<{ user: User }>>(
                '/users/profile',
            );
            commit("setUser", data.user);
        } catch {
            // Si no podemos obtener la data del perfil entonces devolvemos false
            // esto quiere decir que no tenemos un usuario
            return false;
        }        
        return true;
    },
    async logout({ commit }) {
        try {
            await flitterApi.get<unknown, AxiosResponse<{ user: User }>>(
                '/auth/logout',
            );
        } catch {
            // no necesitamos hacer nada, seremos optimistas con el logout
        }         
        commit("setUser", null);
    }
}
export default actions;