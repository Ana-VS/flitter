import { User } from '../../models/user';

export interface ILoginState {
    user: User | null,
}

function state(): ILoginState {
    return {
        user: null,
    }
}

export default state;