import { User } from "@/models/user";

export interface IUserState {
    user: User | null;
    isLoading: boolean;
}

function state(): IUserState {
    return {
        user: null,
        isLoading: false,
    };
}
export default state;
