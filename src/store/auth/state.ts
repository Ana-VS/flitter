export interface ILoginState {
    token: string,
    isLogged: boolean,
}

function state(): ILoginState {
    return {
        token: '',
        isLogged: false,
    }
}

export default state;